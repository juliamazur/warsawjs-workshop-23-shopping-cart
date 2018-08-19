describe('Cart', () => {

  beforeEach(() => {
    cy.fixture('products.json').as('products');
    cy.visit('/');
    cy.get('@products').then((products) => {
      cy.addSingleItemToCart(products.mario);
      cy.addSingleItemToCart(products.minecraft);
    });
    cy.goToCart();
  });

  it('should list item', function() {
    cy.checkProductInCart(this.products.mario);
  });

  it('should remove item', function() {
    cy.checkProductInCart(this.products.mario)
      .parents('[data-test-id="cart-product-item"]')
      .contains('remove')
      .click();
    cy.checkIfProductIsRemoved(this.products.mario);
  });

  it('should clear cart', function() {
    cy.checkProductInCart(this.products.mario);
    cy.checkProductInCart(this.products.minecraft);
    cy.clearCart();
    cy.checkIfCartIsEmpty();
  });

  it('should increase price od adding items', function() {
    let unitPrice;
    let itemPrice;
    let itemsCount;
    cy.checkProductInCart(this.products.mario)
      .parents('[data-test-id="cart-product-item"]')
      .within(() => {
        cy.get('[data-test-id="cart-product-item-increase"]')
          .click();
        cy.get('[data-test-id="cart-product-item-price-per-unit"]')
          .then((pricePerUnit) => {
            unitPrice = parseFloat(pricePerUnit.text());
          });
        cy.get('[data-test-id="cart-product-item-price"]')
          .then((priceForItem) => {
            itemPrice = parseFloat(priceForItem.text());
          });
        cy.get('strong')
          .then((itemsQuantity) => {
            itemsCount = parseFloat(itemsQuantity.text());
            expect(unitPrice * itemsCount).to.equal(itemPrice);
          });
      })

  });
});
