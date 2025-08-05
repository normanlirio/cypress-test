

export default class BasePage {

    open(url: string) {
        cy.visit(url)
    }

}