describe('OrderItem', function() {

  beforeEach(() => {
    cy.fixture('products.json').as('products');
    cy.visit('/');
  });

  it('should add item to cart', function() {
    cy.addSingleItemToCart(this.products.mario);
    cy.get('[data-test-id="cart-summary"]').contains('1 item');
  });

});
