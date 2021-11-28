import { screen, render, RenderResult } from "@testing-library/react";
import * as React from "react";
import NumerList from "./lists";

describe("<lists />", () => {
  let container: RenderResult = null;
  beforeEach(() => {
    container = render(<NumerList list={[1, 2, 3]} />);
    // screen.debug()
  });

  it("should render number list", () => {
    expect(screen.queryAllByRole("listitem")).toHaveLength(3);
    expect(container.queryByText(1)).toBeInTheDocument();
  });
});
