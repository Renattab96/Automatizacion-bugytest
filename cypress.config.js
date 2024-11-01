const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
baseUrl:'https://buggy.justtestit.org/'
experimentalStudio:true
experimentalRunAllSpecs: true
defaultCommandTimeout: 10000 // Tiempo de espera predeterminado de 10 segundos
    },
  },
});
