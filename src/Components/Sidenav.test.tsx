import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Sidenav from "./Sidenav";

describe("Sidenav", () => {
  it("renders the main navigation links and menu items", () => {
    render(
      <MemoryRouter>
        <Sidenav />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: "Resumo" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "Vendas" })).toHaveAttribute(
      "href",
      "/vendas",
    );
    expect(screen.getByText("Webhooks")).toBeInTheDocument();
    expect(screen.getByText("Configurações")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
    expect(screen.getByText("Sair")).toBeInTheDocument();
  });
});
