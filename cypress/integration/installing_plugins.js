/// <reference types="cypress" />

it('Using drag and drop plugin', () => {

  cy
    .visit('/board/77787127477');

  cy
    .get('[data-cy=task]')
    .eq(0)
    .as('task2')
  
  cy
    .get('[data-cy=task]')
    .eq(1)
    .as('task1')

  cy
    .get('@task2')
    .drag('@task1')

});

it('Using file upload plugin', () => {

  cy
    .visit('/board/77787127477');

  cy
    .get('[data-cy=task]')
    .eq(0)
    .click()

  // File that is inside the fixtures folder
  cy
    .get('.dropzone')
    .attachFile('logo.png', { subjectType: 'drag-n-drop' })

});

it('Using real actions plugin', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy=board-item]')
    .realHover()
    .should('have.css', 'background-color', 'rgb(5, 90, 140)')

});

it('Using applitools eyes plugin', () => {

  cy
    .visit('/');

  cy
    .eyesOpen({
      appname: 'Trello app',
      testName: 'Trying out Applitools plugin on the Trello app',
      browser: { width: 800, height: 600 }
    });

  cy
    .eyesCheckWindow('Board list');

  cy
    .eyesClose();

});