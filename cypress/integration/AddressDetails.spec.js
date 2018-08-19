describe('AddressDetails', () => {


  beforeEach(() => {
    cy.fixture('products.json').as('products');
    cy.fixture('addressDetails.json').as('addressDetails');
    cy.visit('/');
    cy.get('@products').then((products) => {
      cy.addSingleItemToCart(products.mario);
      cy.addSingleItemToCart(products.minecraft);
      cy.goToCart();
      cy.checkProductInCart(products.mario);
      cy.checkProductInCart(products.minecraft);
    });
    cy.goToDeliveryDetails();
  });

  it('should fill address form', function() {
    cy.fillAddressDetails(this.addressDetails);
    cy.goToDeliveryMethod();
  });

  it('should display error messages for empty form', function() {
    cy.goToDeliveryMethod();
    cy.get('.ant-form-item-control.has-error')
      .should(($errors) => {
        expect($errors).to.have.length(3);
      });
  });

});
