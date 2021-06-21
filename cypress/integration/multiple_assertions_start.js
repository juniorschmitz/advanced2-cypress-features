/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/2305140181')
})

it('Multiple assertions start', () => {

  cy
    .get('[data-cy=task]')
    .eq(0)
    .should('contain.text', 'bread')

  cy
    .get('[data-cy=task]')
    .eq(1)
    .should('contain.text', 'milk')


  // then function does not contain retry logic, that means that whatever the get command yields, then function will use
  cy
    .get('data-cy=task')
    .then(item => {
      expect(item[0]).to.contain.text('bread')
      expect(item[1]).to.contain.text('milk')
    })

  // should function contains the retry logic (if we reorder itens during the test, it will retry until timeout or test passes)
  cy
  .get('data-cy=task')
  .should(item => {
    if(item.length !== 3) {
      throw new Error('Not enough elements!')
    }
    expect(item[0]).to.contain.text('bread')
    expect(item[1]).to.contain.text('milk')
  })

})