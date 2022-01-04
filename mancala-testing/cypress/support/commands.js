// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Adds cleanup command to reset db for dev testing
Cypress.Commands.add('cleanupApp', () => {
  cy.request('DELETE', 'http://localhost:4741/cleanup')
})

Cypress.Commands.add('signUp', () => {
  cy.get('[href="#sign-up"]').click()
  cy.get('#email').type('test@mancala.com')
  cy.get('#password').type('a')
  cy.get('#passwordConfirmation').type('a')
  cy.get('[type="submit"]').click()
  cy.contains('Success')
  cy.get('[href="#sign-out"]').click()
})

Cypress.Commands.add('signIn', () => {
  cy.get('[href="#sign-in"]').click()
  cy.get('#email').type('test@mancala.com')
  cy.get('#password').type('a')
  cy.get('[type="submit"]').click()
  cy.contains('Success')
  cy.contains('Welcome')
})

Cypress.Commands.add('signOut', () => {
  cy.get('[href="#sign-out"]').click()
  cy.contains('Success')
})