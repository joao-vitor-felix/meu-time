import { screen, render } from "@testing-library/react";
import SelectCountry from "./SelectCountry";
import { Theme } from "../../styles/Theme";
import { BrowserRouter } from "react-router-dom";

describe("SelectCountry", () => {
  it("should render the component", () => {
    render(
      <Theme>
        <BrowserRouter>
          <SelectCountry flag="www.google.com" name="Brazil" />
        </BrowserRouter>
      </Theme>
    );
    expect(
      screen.getByAltText(/imagem da bandeira brazil/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/brazil/i)).toBeInTheDocument();
  });
});
