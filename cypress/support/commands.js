/// <reference types="cypress" />

Cypress.Commands.add('clickLink', (link) => {
    cy.get('div#load_box #load_form')
        .contains(link)
        .click()
})


Cypress.Commands.add('waitForPageLoad', () => {
    cy.document().should('have.property', 'readyState', 'complete')
    cy.window().should('have.property', 'document')
    cy.document().its('readyState').should('eq', 'complete')
})

Cypress.Commands.add('registration', (selector, action) => {
    cy.get(selector)
        .contains(action)
        .parent()
        .find('a')
        .should('be.visible')
        .invoke('removeAttr', 'target')
        .click()
})