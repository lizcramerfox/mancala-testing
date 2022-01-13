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

  it.only('views saved game in index, opens it, and continues playing', () => {
    cy.signUp()
    cy.signIn()
    cy.get('.new-game').click()
    
    cy.makeFirstMove()

    // Views game in index
    cy.get('[href="#games"]').click()
    cy.get('.game-status-label').contains('IN PROGRESS')
    cy.get('.game-preview').contains('Player B\'s Turn')
    cy.get('.stones-a').contains('1')
    cy.get('.stones-b').contains('0')

    // Opens game
    cy.get('.game-preview').click()
  })

  it('starts a game, tests non-valid moves, and completes the game', () => {
    cy.signUp()
    cy.signIn()
    cy.get('.new-game').click()

    // Start the game
    cy.get('#A0').click()
    cy.get('#B0').click()
    cy.get('#A1').click()
    cy.get('#A2').click()
    cy.get('#B0').click()
    
    // Tries to make move on wrong player's side
    cy.get('#B1').click()

    // Doesn't change board state or current player 
    cy.get('#B1').contains('7')
    cy.get('.game-info').contains('Player A\'s Turn')

    // Finishes the game
    cy.get('#A3').click()
    cy.get('#B4').click()
    cy.get('#A0').click()
    cy.get('#B0').click()
    cy.get('#A4').click()
    cy.get('#B4').click()
    cy.get('#A1').click()
    cy.get('#B1').click()
    cy.get('#A3').click()
    cy.get('#B0').click()
    cy.get('#A0').click()
    cy.get('#B2').click()
    cy.get('#A2').click()
    cy.get('#B4').click()
    cy.get('#A1').click()
    cy.get('#B5').click()
    cy.get('#A3').click()
    cy.get('#A4').click()
    cy.get('#B0').click()
    cy.get('#A0').click()
    cy.get('#B1').click()
    cy.get('#A2').click()
    cy.get('#B2').click()
    cy.get('#A1').click()
    cy.get('#B3').click()
    cy.get('#A4').click()
    cy.get('#A5').click()
    cy.get('#A3').click()
    cy.get('#A5').click()
    cy.get('#A2').click()
    cy.get('#B5').click()
    cy.get('#B4').click()

    // Checks for correct winner
    cy.get('#AM').contains(21)
    cy.get('#BM').contains(27)
    cy.get('.game-info').contains('Player B Wins')
  })

  it('views a complete game in index', () => {
    cy.signUp()
    cy.signIn()
    cy.get('.new-game').click()
    cy.playCompleteGame()

    // Returns to index view
    cy.get('[href="#games"]').click()

    // Checks game stats
    cy.get('.game-status-label').contains('GAME OVER')
    cy.get('.game-preview').contains('Player B Wins')
    cy.get('.stones-a').contains('21')
    cy.get('.stones-b').contains('27')
  })

  it('views a complete game and an incomplete game in index', () => {
    cy.signUp()
    cy.signIn()
    
    // Plays incomplete game
    cy.get('.new-game').click()
    cy.makeFirstMove()

    // Plays complete game
    cy.get('[href="#games-create"]').click()
    cy.playCompleteGame()


    // Returns to index view
    cy.get('[href="#games"]').click()

    // Checks game data
    cy.get('.game-preview').should('have.length', 2)
    
    cy.get('.game-preview').eq(1).click()

  })
})
