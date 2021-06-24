/// <reference types="cypress" />

beforeEach(() => {
  cy.request('POST', '/api/reset')
})

// This should be inside commands.js under support folder
// Cypress.Commands.add('addBoard', (input) => {
//   cy
//   .get('[data-cy="create-board"]')
//   .click();

//   cy
//     .get('[data-cy=new-board-input]')
//     .type(input + '{enter}');
// })

Cypress.Commands.add('take', {prevSubject: 'optional'}, (subject, input) => {

  if (subject) {

    cy
      .wrap(subject)
      .find(`[data-cy=${input}]`)

  } else {

    cy
      .get(`[data-cy=${input}]`)

  }

})


it('Custom commands through commands.js', () => {

  cy
    .visit('/');

  cy
    .addBoard('groceries')
  
});

// Custom commands can be parent, child or dual
it('Custom commands', () => {

  cy
    .visit('/board/77787127477');

  cy
    .take('list')
    .eq(0)
    .take('task')
  
});