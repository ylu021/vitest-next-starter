import Home from "../app/page";
import { render, screen } from "@testing-library/react";

describe("Home component", () => {
  it("rendered", () => {
    render(<Home />);
    expect(
      screen.getByText("Save and see your changes instantly.")
    ).toBeInTheDocument();
  });
});
