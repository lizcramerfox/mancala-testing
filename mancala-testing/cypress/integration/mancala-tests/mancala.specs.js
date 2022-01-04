/// <reference types="cypress" />

describe('mancala tests', () => {
  beforeEach(() => {
    cy.cleanupApp()
    cy.visit('http://localhost:7165')
  })

  it('opens landing page', () => {
    cy.contains('Sign In')
  })

  it('signs up', () => {
    cy.get('[href="#sign-up"]').click()
    cy.get('#email').type('test@mancala.com')
    cy.get('#password').type('a')
    cy.get('#passwordConfirmation').type('a')
    cy.get('[type="submit"]').click()
    cy.contains('Success')
    cy.get('[href="#sign-out"]').click()
  })

  it('signs in and signs out', () => {
    cy.signUp()
    
    // Signs In
    cy.get('[href="#sign-in"]').click()
    cy.get('#email').type('test@mancala.com')
    cy.get('#password').type('a')
    cy.get('[type="submit"]').click()
    cy.contains('Success')
    cy.contains('Welcome')

    // Signs Out
    cy.get('[href="#sign-out"]').click()
    cy.contains('Success')
  })

  it('changes password', () => {
    // Signs Up/In
    cy.signUp()
    cy.signIn()

    // Changes password
    cy.get('[href="#change-password"]').click()
    cy.get('#oldPassword').type('a')
    cy.get('#newPassword').type('b')
    cy.get('[value="Submit"]').click()

    // Signs out
    cy.signOut()

    // Signs in with new password
    cy.get('[href="#sign-in"]').click()
    cy.get('#email').type('test@mancala.com')
    cy.get('#password').type('b')
    cy.get('[value="Submit"]').click()
    cy.contains('Success')
    cy.contains('Welcome')

    // Changes password back to original
    cy.get('[href="#change-password"]').click()
    cy.get('#oldPassword').type('b')
    cy.get('#newPassword').type('a')
    cy.get('[value="Submit"]').click()
    cy.contains('Success')
  })

  it('starts a new game and then deletes it', () => {
    cy.signUp()
    cy.signIn()
    cy.get('.new-game').click()
    cy.contains('Success')
    cy.get('.delete-button').click()
    cy.get('.button-container > :nth-child(2)').click()
    cy.contains('Success')
  })
})
