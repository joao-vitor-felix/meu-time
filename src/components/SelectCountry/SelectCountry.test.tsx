import { screen, render } from "@testing-library/react";
import SelectCountry from "./SelectCountry";

describe("SelectCountry", () => {
  it("should render the component", () => {
    render(<SelectCountry flag="www.google.com" name="Brazil" />);
    expect(
      screen.getByAltText(/imagem da bandeira brazil/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/brazil/i)).toBeInTheDocument();
  });
});
