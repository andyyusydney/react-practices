// src/__test__/notFound.spec.tsx
import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

let documentBody: RenderResult;
describe("<NotFound />", () => {
  beforeEach(() => {
    documentBody = render(<NotFoundPage />);
  });

  it("shows not found message", () => {
    expect(
      documentBody.getByText("Oops! Page is Not Found!")
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
