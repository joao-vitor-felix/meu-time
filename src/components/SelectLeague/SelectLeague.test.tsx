import { screen, render } from "@testing-library/react";
import SelectLeague from "./SelectLeague";
import { Theme } from "../../styles/Theme";
import { BrowserRouter } from "react-router-dom";

describe("SelectLeague", () => {
  it("should render the component", () => {
    render(
      <Theme>
        <BrowserRouter>
          <SelectLeague name="Ligue 1" logo="www.google.com" id={71} />
        </BrowserRouter>
      </Theme>
    );
    expect(screen.getByAltText(/imagem da liga ligue 1/i)).toBeInTheDocument();
    expect(screen.getByText(/ligue 1/i)).toBeInTheDocument();
  });
});
