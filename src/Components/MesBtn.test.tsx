import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { Dispatch, SetStateAction } from "react";
import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import MesBtn from "./MesBtn";
import { useDataContext } from "../Contexts/DataContext";

vi.mock("../Contexts/DataContext", () => ({
  useDataContext: vi.fn(),
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

const fixedDate = new Date(2025, 2, 15, 12, 0, 0);
const RealDate = Date;

describe("MesBtn", () => {
  beforeEach(() => {
    class MockDate extends RealDate {
      constructor(
        ...args:
          | []
          | [number]
          | [string]
          | [Date]
          | [number, number, number]
          | [number, number, number, number]
          | [number, number, number, number, number]
          | [number, number, number, number, number, number]
          | [number, number, number, number, number, number, number]
      ) {
        if (args.length === 0) {
          super(fixedDate);
          return;
        }

        super(...(args as unknown as [
          number,
          number,
          number?,
          number?,
          number?,
          number?,
          number?,
        ]));
      }

      static now() {
        return fixedDate.getTime();
      }
    }

    vi.stubGlobal("Date", MockDate);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the month name for the given offset", () => {
    const contextValue = createDataContextValue();
    vi.mocked(useDataContext).mockReturnValue(contextValue);

    const { unmount } = render(<MesBtn n={0} />);

    expect(
      screen.getByRole("button", { name: /mar/i }),
    ).toBeInTheDocument();
    unmount();
  });

  it("updates the selected date range when clicked", async () => {
    const user = userEvent.setup();
    const contextValue = createDataContextValue();
    const mockedUseDataContext = vi.mocked(useDataContext);
    mockedUseDataContext.mockReturnValue(contextValue);

    const { unmount } = render(<MesBtn n={0} />);

    const button = screen.getByRole("button", { name: /mar/i });

    await user.click(button);

    expect(contextValue.setInicio).toHaveBeenCalledWith("2025-03-01");
    expect(contextValue.setFinal).toHaveBeenCalledWith("2025-03-31");
    unmount();
  });
});
