import { render, screen } from "@testing-library/react";
import type { Dispatch, SetStateAction } from "react";
import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import Meses from "./Meses";
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

describe("Meses", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2025, 2, 15, 12, 0, 0));
    vi.mocked(useDataContext).mockReturnValue(createDataContextValue());
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the three month shortcuts", () => {
    render(<Meses />);

    expect(screen.getAllByRole("button")).toHaveLength(3);
  });
});
