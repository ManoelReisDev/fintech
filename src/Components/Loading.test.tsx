import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loading from "./Loading";

describe("Loading", () => {
  it("renders an accessible loading indicator", () => {
    render(<Loading />);

    expect(
      screen.getByRole("status", { name: /carregando/i }),
    ).toBeInTheDocument();
  });
});
