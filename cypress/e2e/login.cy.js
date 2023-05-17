/// <reference types="cypress" />
describe('Login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
  })

  it('should successfully login', () => {
    const admin = 'admin'
    cy.get('[name=username]').type(admin)
    cy.get('[name=password]').type(admin)
    cy.get('button').contains('Login').click()

    cy.get('h1').should('contain.text', 'Slawomir')
  })

  it('should fail to login', () => {
    cy.get('[name=username]').type('wrong')
    cy.get('[name=password]').type('wrong')
    cy.get('button').contains('Login').click()

    cy.get('.alert').should('contain.text', 'Invalid username/password supplied')
  })

  it('should open Register page', () => {
    cy.get('.btn.btn-link').click()
    
    // Asercje w Cypressie
    cy.get('h2').should('have.text', 'Register')
    cy.url().should('contain', 'register')
  })

})
