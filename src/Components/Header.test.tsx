import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Header from "./Header";

vi.mock("../Components/DataRange", () => ({
  default: () => <div data-testid="data-range" />,
}));

vi.mock("../Components/Meses", () => ({
  default: () => <div data-testid="meses" />,
}));

const renderHeader = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Header />
    </MemoryRouter>,
  );

describe("Header", () => {
  it("shows the summary title on the home route", async () => {
    renderHeader("/");

    expect(screen.getByRole("heading", { name: "Resumo" })).toBeInTheDocument();
    expect(screen.getByTestId("data-range")).toBeInTheDocument();
    expect(screen.getByTestId("meses")).toBeInTheDocument();

    await waitFor(() => {
      expect(document.title).toBe("Fintech | Resumo");
    });
  });

  it("shows the sales title on the vendas route", async () => {
    renderHeader("/vendas");

    expect(screen.getByRole("heading", { name: "Vendas" })).toBeInTheDocument();

    await waitFor(() => {
      expect(document.title).toBe("Fintech | Vendas");
    });
  });

  it("shows the single sale title on the detail route", async () => {
    renderHeader("/vendas/venda-01");

    expect(screen.getByRole("heading", { name: "Venda" })).toBeInTheDocument();

    await waitFor(() => {
      expect(document.title).toBe("Fintech | Venda");
    });
  });
});
