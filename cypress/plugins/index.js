const { setupDb } = require('./setupDb')

module.exports = (on, config) => {
  // 'on' is used to hook into various events Cypress emits
  // 'config' is the resolved Cypress config
  on('task', {
    setupDb
  })
}


// require('@applitools/eyes-cypress')(module);
