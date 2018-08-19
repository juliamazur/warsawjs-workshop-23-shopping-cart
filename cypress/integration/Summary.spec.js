describe('Summary', () => {
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
    cy.get('@deliveryMethods').then((deliveryMethods) => {
      cy.chooseDeliveryMethod(deliveryMethods[1].name);
    });
    cy.submitDeliveryMethod();
  });

  it('should contains order', function() {
    cy.contains('Order');
    cy.contains(this.addressDetails.fullname);
    cy.contains(this.addressDetails.street);
    cy.contains(this.addressDetails.city);
    cy.contains(this.addressDetails.country);
    cy.contains(this.deliveryMethods[1].name);
    cy.contains(this.deliveryMethods[1].price);
  });

  it('should calculate price correctly', function() {
    let deliveryCost;
    let itemsPrice = 0;
    let overallPrice;
    cy.get('#root').find('[data-test-id="cart-product-item-price"]')
      .each(($el) => {
        itemsPrice += parseFloat($el.text());
      });
    cy.get('[ data-test-id="order-summary-delivery-overall-price"]')
      .then(($overallPrice) => {
        overallPrice = parseFloat($overallPrice.text())
      });
    cy.get('[data-test-id="order-summary-delivery-method-price"]')
      .then(($deliveryMethodPrice) => {
        deliveryCost = parseFloat($deliveryMethodPrice.text());
        expect(deliveryCost + itemsPrice).to.equal(overallPrice)
      });
  });
});
