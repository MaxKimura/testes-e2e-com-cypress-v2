const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://notes-serverless-app.com',
    watchForFileChanges: false
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
})
