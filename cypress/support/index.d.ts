/// <reference types="cypress" />
export {}

declare global {
  namespace Cypress {
    interface Chainable {
      clickLink(link: string): Chainable<void>
      waitForPageLoad(): Chainable<void>
    }
  }
}