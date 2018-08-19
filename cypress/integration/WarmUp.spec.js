describe.skip('WarmUp', function() {
  it(`should find 'AmazonBasics Dual Voltage AC Charger for Nintendo Switch (Supports TV Mode), Black'`, function() {
    cy.visit('/');

    cy.contains('AmazonBasics Dual Voltage AC Charger for Nintendo Switch (Supports TV Mode), Black');
  });

  it(`should find 'PS4 Pro'`, function() {
    cy.visit('/');

    cy.contains('should find \'PS4 Pro');
  });
});
