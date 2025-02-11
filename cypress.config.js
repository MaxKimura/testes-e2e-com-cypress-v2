const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'wtuh1i',
  chromeWebSecurity: false,
  e2e: {
    baseUrl:'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    watchForFileChanges: false,
    requestTimeout: 60000,
    defaultCommandTimeout: 60000,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
})
