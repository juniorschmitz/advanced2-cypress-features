/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('Changing the DOM', () => {

  // Before clicking, Cypress will check if the element is visible, not disabled and not covered by any other element
  cy
    .get('[data-cy="star"]')
    .click()

  // This way the click will happen, but it is not good practice
  cy
    .get('[data-cy="star"]')
    .click({force: true})

  // Changed visibility of the DOM element through .invoke('show')
  cy
    .get('[data-cy="star"]')
    .invoke('show')
    .click()

  // This way, we are changing the DOM and adding an extra class to our element (making it checked on this System Under Test)
  cy
    .get('[data-cy="task"]')
    .invoke('addClass', 'overDue')

})

// Another way we can do a hover for example, is triggering Event listeners, like the mouseover and mouseout, like the example below: 
it('Using Mouseover', () => {

  cy
    .get('data-cy="board-item"]')
    .trigger('mouseover')

  cy
    .get('[data-cy=star')
    .should('be.visible')

  cy
    .get('data-cy="board-item"]')
    .trigger('mouseout')

  cy
    .get('[data-cy=star')
    .should('not.be.visible')

})