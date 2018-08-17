describe("App", function() {
  it("loads correctly", function() {
    cy.visit("http://127.0.0.1:3000/");

    cy.contains("Shop home");
  });
});
