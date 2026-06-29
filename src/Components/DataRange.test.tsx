import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentProps, Dispatch, SetStateAction } from "react";
import { describe, expect, it, vi } from "vitest";
import DataRange from "./DataRange";
import { useDataContext } from "../Contexts/DataContext";

type DateInputProps = ComponentProps<"input"> & {
  label: string;
};

vi.mock("../Contexts/DataContext", () => ({
  useDataContext: vi.fn(),
}));

vi.mock("../Components/DateInput", () => ({
  default: ({ label, ...props }: DateInputProps) => (
    <div>
      <label htmlFor={props.id}>{label}</label>
      {(() => {
        const { value, ...inputProps } = props;
        return <input defaultValue={value} {...inputProps} />;
      })()}
    </div>
  ),
}));

type DataContextValue = ReturnType<typeof useDataContext>;
type SetStringState = Dispatch<SetStateAction<string>>;

const createDataContextValue = (): DataContextValue => ({
  data: null,
  loading: false,
  error: null,
  inicio: "2025-01-01",
  final: "2025-01-31",
  setInicio: vi.fn<SetStringState>(),
  setFinal: vi.fn<SetStringState>(),
});

describe("DataRange", () => {
  it("renders the current range and updates context on change", async () => {
    const user = userEvent.setup();
    const contextValue = createDataContextValue();
    vi.mocked(useDataContext).mockReturnValue(contextValue);

    render(<DataRange />);

    const startInput = screen.getByLabelText("Inicio");
    const endInput = screen.getByLabelText("Fim");

    expect(startInput).toHaveValue("2025-01-01");
    expect(endInput).toHaveValue("2025-01-31");

    await user.clear(startInput);
    await user.type(startInput, "2025-02-01");

    await user.clear(endInput);
    await user.type(endInput, "2025-02-28");

    expect(contextValue.setInicio).toHaveBeenLastCalledWith("2025-02-01");
    expect(contextValue.setFinal).toHaveBeenLastCalledWith("2025-02-28");
  });
});
