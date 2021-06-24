/// <reference types="cypress" />

// Combining UI and API testing along with a single E2E test
// Reduce flakyness and false positives in the test, wait dynamicaly

it('Intercept requests GET', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }).as('boardList')

  cy
    .visit('/')

  cy
    .wait('@boardList')
    .its('response.statusCode')
    .should('eq', 200)

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 0)

});

it('Intercept requests POST', () => {

  cy
    .intercept({
      method: 'POST',
      url: '/api/boards'
    }).as('createBoard')

  cy
    .visit('/')

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('launching a rocker{enter}')

  cy
    .wait('@createBoard')
    .then( (board) => {
      expect(board.response.statusCode).to.eq(201)
      expect(board.request.body.name).to.eq('launching a rocket')
    })

});