import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import GraficoVendas from "./GraficoVendas";
import type { IVenda } from "../Types/Venda";

type ChartRow = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

type MockLineChartProps = {
  children?: ReactNode;
  data?: readonly ChartRow[];
};

let capturedLineChartData: readonly ChartRow[] | undefined;

vi.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: { children?: ReactNode }) => (
    <div data-testid="responsive-container">{children}</div>
  ),
  LineChart: ({ children, data }: MockLineChartProps) => {
    capturedLineChartData = data;
    return <div data-testid="line-chart">{children}</div>;
  },
  Line: ({ dataKey }: { dataKey: string }) => (
    <div data-testid={`line-${dataKey}`} />
  ),
  XAxis: ({ dataKey }: { dataKey: string }) => (
    <div data-testid="x-axis" data-key={dataKey} />
  ),
  YAxis: () => <div data-testid="y-axis" />,
  Tooltip: () => <div data-testid="tooltip" />,
  Legend: () => <div data-testid="legend" />,
}));

const vendas: IVenda[] = [
  {
    id: "1",
    nome: "Notebook",
    preco: 10,
    status: "pago",
    pagamento: "pix",
    data: "2025-06-01 10:00:00",
    parcelas: null,
  },
  {
    id: "2",
    nome: "Mouse",
    preco: 20,
    status: "processando",
    pagamento: "cartao",
    data: "2025-06-01 12:00:00",
    parcelas: 2,
  },
  {
    id: "3",
    nome: "Teclado",
    preco: 5,
    status: "falha",
    pagamento: "boleto",
    data: "2025-06-02 09:00:00",
    parcelas: null,
  },
  {
    id: "4",
    nome: "Monitor",
    preco: 15,
    status: "pago",
    pagamento: "pix",
    data: "2025-06-01 18:00:00",
    parcelas: null,
  },
];

describe("GraficoVendas", () => {
  beforeEach(() => {
    capturedLineChartData = undefined;
  });

  it("groups sales by day and status before rendering the chart", () => {
    render(<GraficoVendas data={vendas} />);

    expect(screen.getByTestId("responsive-container")).toBeInTheDocument();
    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
    expect(screen.getByTestId("legend")).toBeInTheDocument();
    expect(screen.getByTestId("x-axis")).toHaveAttribute("data-key", "data");
    expect(screen.getByTestId("line-pago")).toBeInTheDocument();
    expect(screen.getByTestId("line-processando")).toBeInTheDocument();
    expect(screen.getByTestId("line-falha")).toBeInTheDocument();
    expect(capturedLineChartData).toEqual([
      {
        data: "06-01",
        pago: 25,
        processando: 20,
        falha: 0,
      },
      {
        data: "06-02",
        pago: 0,
        processando: 0,
        falha: 5,
      },
    ]);
  });
});
