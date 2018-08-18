describe("App", function() {
  it("loads correctly", function() {
    cy.visit("/");

    cy.contains("Shop home");
  });
});
