import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import type { IVenda } from "../Types/Venda";
import VendaItem from "./VendaItem";

const venda: IVenda = {
  id: "venda-01",
  nome: "Notebook Pro",
  preco: 1234.56,
  status: "pago",
  pagamento: "pix",
  data: "2025-06-01",
  parcelas: null,
};

describe("VendaItem", () => {
  it("renders the sale data and links to the detail page", () => {
    render(
      <MemoryRouter>
        <VendaItem venda={venda} />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /venda-01/i }),
    ).toHaveAttribute("href", "/vendas/venda-01");
    expect(screen.getByText("Notebook Pro")).toBeInTheDocument();
    expect(screen.getByText("R$ 1.234,56")).toBeInTheDocument();
  });
});
