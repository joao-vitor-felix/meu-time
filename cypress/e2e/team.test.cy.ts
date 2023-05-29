import "@testing-library/cypress/add-commands";

describe("Team flux", () => {
  it("should be able to see team information ", () => {
    cy.visit("http://localhost:5173");
    cy.findByPlaceholderText(/digite sua key/i).type(
      "ae7fb7d2e733a93339ce809414adc04b"
    );
    cy.findAllByRole("button", {
      name: /confirmar/i
    }).click();
    cy.findByAltText(/Imagem da bandeira France/i).click();
    cy.findByPlaceholderText(/exemplo: 2022/i).type("2020");
    cy.findByAltText(/Imagem da liga Ligue 1/i).click();
    cy.findByAltText(/Imagem do time Paris Saint Germain/i).click();
  });
});
