/// <reference types="cypress" />

// Cypress delete/clean cookies between executions if we do not set the preserve cookies
Cypress.Cookies.defaults({
  preserve: 'trello_token'
})
// It should be inside the index.js under the support folder if we would like to preserve this cookie for all tests, otherwise, it should be inside the test file, 
// but with the second syntax (inside the beforeEach block):

describe('Cookies', () => {

  beforeEach(() => {

    Cypress.Cookies.preserveOnce('trello_token')

    cy
      .visit('/')

  })

  it.only('test #1', () => {

    // Logging in using cookies
    cy
      .setCookie('trell_token', 'cuahfdauhdfauh123123hscadhfasufh')

    cy
      .reload()

    // cy
    //   .get('[data-cy="login-menu"]')
    //   .click();

    // cy
    //   .get('[data-cy="login-email"]')
    //   .type('filip@example.com');

    // cy
    //   .get('[data-cy="login-password"]')
    //   .type('Asdf.1234#');

    // cy
    //   .get('[data-cy="login"]')
    //   .click();

    });

  it('test #2', () => {

  });

  it('test #3', () => {

  });

});