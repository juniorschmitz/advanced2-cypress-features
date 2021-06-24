/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/2305140181')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy="task"]')
    .eq(1)
    .should('be.visible')
    .should('have.text', 'milk')

  // context of first element, gets the first element available on the DOM
  cy
    .contains('milk')

  // context of the second list, we are passing the first element as context
  cy
    .get('data-cy="list')
    .eq(1)
    .contains('milk')

});