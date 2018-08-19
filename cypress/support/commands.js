// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('addSingleItemToCart', (itemName) => {
  cy.get(`[data-test-id="products-list"]`)
    .contains(itemName)
    .parents('[data-test-id="product-item"]')
    .contains('Buy')
    .click();
});

Cypress.Commands.add('goToCart', () => {
  cy.get('[data-test-id="cart-summary"]').click();
});

Cypress.Commands.add('checkIfCartIsEmpty', () => {
  cy.get('[data-test-id="cart-products-list"]')
    .contains('No data');
});

Cypress.Commands.add('checkProductInCart', (itemName) => {
  cy.get('[data-test-id="cart-products-list"]')
    .contains(itemName);
});

Cypress.Commands.add('checkIfProductIsRemoved', (itemName) => {
  cy.get('[data-test-id="cart-products-list"]')
    .not('contains', itemName);
});

Cypress.Commands.add('goToDeliveryDetails', () => {
  cy.get('[data-test-id="cart-actions"]')
    .contains('Next')
    .click();
});

Cypress.Commands.add('clearCart', () => {
  cy.get('[data-test-id="cart-actions"]')
    .contains('Clear cart')
    .click();
});

Cypress.Commands.add('fillAddressDetails', (addressDetails) => {
  cy.get('input[id="fullname"]')
    .type(addressDetails.fullname);
  cy.get('input[id="street"]')
    .type(addressDetails.street);
  cy.get('input[id="city"]')
    .type(addressDetails.city);
  cy.get('[data-test-id="address-form"] .ant-cascader-picker')
    .click();
  cy.get(`.ant-cascader-menu-item[title=${addressDetails.country}]`)
    .click();
});

Cypress.Commands.add('goToDeliveryMethod', () => {
  cy.get('[data-test-id="address-form"]')
    .contains('Next')
    .click();
});

Cypress.Commands.add('chooseDeliveryMethod', (deliveryMethod) => {
  cy.get('#deliveryMethod')
    .click();
  cy.get('.ant-select-dropdown ul[role="listbox"]')
    .contains(deliveryMethod)
    .click();
});

Cypress.Commands.add('submitDeliveryMethod', () => {
  cy.get('[data-test-id="delivery-method"]')
    .contains('Next')
    .click();
});
