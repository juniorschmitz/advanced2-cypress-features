/// <reference types="cypress" />

const { curry } = require("cypress/types/lodash");

it('Stubbing response *sample without Stubbing', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }).as('boardList')

  cy
    .visit('/')

});

it('Stubbing response empty body', () => {
  // This way, we intercept the server response and tell the rendering not to show any board (empty list)
  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, {
      body: []
    }).as('boardList')

  cy
    .visit('/')

});

it('Stubbing response using fixtures', () => {

  // This way, instead of the server response, we are getting the mock boards list from fixtures/threeBoards.json
  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, {
      fixture: 'threeBoards'
    }).as('boardList')

  cy
    .visit('/')

});

it('Stubbing response for checking if our application behaves correctly when occurs network errors', () => {

  // Forcing network error for verifying if the application behaves correctly
  cy
    .intercept({
      method: 'POST',
      url: '/api/boards'
    }, {
      forceNetworkError: true
    }).as('createBoard')

  cy
    .visit('/')

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input')
    .type('new board{enter}')

  cy
    .get('#errorMessage')
    .should('be.visible')

});

it('Stubbing response changing the response with dynamic function', () => {

  // Second parameter of the cy.intercept can be a function (powerful feature)
  // In this example, we are getting the real boards and starring one of them (the first)
  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, (req) => {

      console.log(req)
      req.reply( (res) => {
        console.log(res)
        res.body[0].starred = true

        return res
      })

    }).as('boardList')

  cy
    .visit('/')

});
