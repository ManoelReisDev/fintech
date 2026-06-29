import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentProps } from "react";
import type { ChangeEvent } from "react";
import { describe, expect, it, vi } from "vitest";
import DateInput from "./DateInput";

describe("DateInput", () => {
  it("uses the label text to create default input identifiers", () => {
    render(<DateInput label="Inicio" />);

    const input = screen.getByLabelText("Inicio");

    expect(input).toHaveAttribute("type", "date");
    expect(input).toHaveAttribute("id", "inicio");
    expect(input).toHaveAttribute("name", "inicio");
  });

  it("forwards native input props and triggers change events", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn<(event: ChangeEvent<HTMLInputElement>) => void>();

    const props: ComponentProps<"input"> = {
      id: "final",
      name: "final-date",
      value: "",
      onChange: handleChange,
      min: "2025-01-01",
      max: "2025-12-31",
    };

    render(<DateInput label="Fim" {...props} />);

    const input = screen.getByLabelText("Fim");

    expect(input).toHaveAttribute("id", "final");
    expect(input).toHaveAttribute("name", "final-date");
    expect(input).toHaveAttribute("min", "2025-01-01");
    expect(input).toHaveAttribute("max", "2025-12-31");

    await user.type(input, "2025-06-29");

    expect(handleChange).toHaveBeenCalled();
  });
});
