describe("renders home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("h1").contains("Tic-Tac-Toe");
  });
});

describe("check form", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#supertokens-root")
      .get("div")
      .get("div")
      .should("have.class", "content");
  });
});

describe("contains footer", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("p").get("div").should("have.class", "content");
  });
});
