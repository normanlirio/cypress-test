import BasePage from "./BasePage";


class Home extends BasePage {

    private readonly linkBox: string;

    constructor() {
        super()
        this.linkBox = 'div.linkbox'
    }


    getTargetUrl(menuItem: string) {
       cy.get(this.linkBox)
            .contains(menuItem)
            .parent()
            .find('a')
            .should('be.visible')
            .invoke('attr', 'href')
            .as('link')
        return cy.get('@link');
    }

    visitTargetUrl(menuItem: string) {
        cy.get(this.linkBox)
             .contains(menuItem)
             .parent()
             .find('a')
             .should('be.visible')
             .invoke('removeAttr', 'target')
             .click()
        return this
     }

}

export default new Home()