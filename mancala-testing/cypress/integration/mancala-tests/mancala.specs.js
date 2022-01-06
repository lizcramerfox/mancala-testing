/// <reference types="cypress" />

describe('mancala tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:7165')
    // cy.cleanupApp()
  })

  afterEach(() => {
    cy.cleanupApp()
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

  it('starts a new game, makes a move', () => {
    cy.signUp()
    cy.signIn()
    cy.get('.new-game').click()
    
    // Makes a move
    cy.get('#A5').click()
    
    // Checks board
    cy.get('#A0').contains(4)
    cy.get('#A1').contains(4)
    cy.get('#A2').contains(4)
    cy.get('#A3').contains(4)
    cy.get('#A4').contains(4)
    cy.get('#A5').contains(0)
    cy.get('#AM').contains(1)
    cy.get('#B0').contains(5)
    cy.get('#B1').contains(5)
    cy.get('#B2').contains(5)
    cy.get('#B3').contains(4)
    cy.get('#B3').contains(4)
    cy.get('#B3').contains(4)
    cy.get('#BM').contains(0)
  })

  it('views saved game in index', () => {
    cy.signUp()
    cy.signIn()
    cy.get('.new-game').click()
    
    cy.makeFirstMove()

    // View game in index
    cy.get('[href="#games"]').click()
    cy.get('.game-status-label').contains('IN PROGRESS')
    cy.get('.game-preview').contains('Player B\'s Turn')
    cy.get('.stones-a').contains('1')
    cy.get('.stones-b').contains('0')
  })
})
