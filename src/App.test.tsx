import { screen, render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render the heading", () => {
    render(<App />);
    const headingElement = screen.getByText(/teste/i);
    expect(headingElement).toBeInTheDocument();
  });
});
