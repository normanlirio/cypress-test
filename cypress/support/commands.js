/// <reference types="cypress" />

Cypress.Commands.add('clickLink', (link) => {
    cy.visit('http://www.qa.way2automation.com')
    cy.get('div#load_box #load_form')
        .contains(link)
        .click()
})


Cypress.Commands.add('waitForPageLoad', () => {
    cy.document().should('have.property', 'readyState', 'complete')
    cy.window().should('have.property', 'document')
    cy.document().its('readyState').should('eq', 'complete')
})