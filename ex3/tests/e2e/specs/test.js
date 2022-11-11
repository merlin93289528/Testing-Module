// https://docs.cypress.io/api/table-of-contents

describe('TTime', () => {
  it('All tests', () => {
    cy.visit('/')

    const date = new Date()

    cy.get('input[name="hours"]').should('have.value', date.getHours())
    cy.get('input[name="minutes"]').should('have.value', date.getMinutes())

    cy.get('.inc-minutes').click({force: true})
    cy.get('input[name="minutes"]').should('have.value', date.getMinutes() + 1)
    
    cy.get('.inc-hours').click({force: true})
    cy.get('input[name="hours"]').should('have.value', date.getHours() + 1)
  })
})
