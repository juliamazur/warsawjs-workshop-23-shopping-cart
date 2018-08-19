describe('DeliveryMethod', () => {
  beforeEach(() => {
    cy.fixture('products.json').as('products');
    cy.fixture('addressDetails.json').as('addressDetails');
    cy.fixture('deliveryMethods.json').as('deliveryMethods');
    cy.visit('/');
    cy.get('@products').then((products) => {
      cy.addSingleItemToCart(products.mario);
      cy.addSingleItemToCart(products.minecraft);
      cy.goToCart();
      cy.checkProductInCart(products.mario);
      cy.checkProductInCart(products.minecraft);
    });
    cy.goToDeliveryDetails();
    cy.get('@addressDetails').then((addressDetails) => {
      cy.fillAddressDetails(addressDetails);
    });
    cy.goToDeliveryMethod();
  });

  it('should choose delivery method', function() {
    cy.chooseDeliveryMethod(this.deliveryMethods[1].name);
    cy.submitDeliveryMethod();
  });
});
