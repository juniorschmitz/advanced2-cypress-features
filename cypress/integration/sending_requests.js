/// <reference types="cypress" />

// Multiple request samples using Cypress built-in methods/functions

it('Sending requests', () => {

  beforeEach(() => {
    cy
    .request({
      method: 'POST',
      url: '/api/reset'
    })
  })

  cy
    .visit('/')

  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'board created by .request() command'
      }
    })

    cy
    .request({
      method: 'PATCH',
      url: '/api/boards/53988530305',
      body: {
        name: 'changing through patch!'
      }
    })

    cy
    .request({
      method: 'DELETE',
      url: '/api/boards/53988530305'
    })

});