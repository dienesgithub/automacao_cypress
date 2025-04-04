require('dotenv').config()

const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com.br",
    specPattern: ["cypress/e2e/api/**/*.cy.js", "cypress/e2e/front/**/*.cy.js", "cypress/e2e/cucumber/features/*.feature"],
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      config.env.email = process.env.CYPRESS_EMAIL
      config.env.user = process.env.CYPRESS_USER
      config.env.password = process.env.CYPRESS_PASSWORD
      return config
    }
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report",
    overwrite: true,
    html: true,
    json: true
  },
  experimentalInteractiveRunEvents: true
})

