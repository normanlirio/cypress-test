


export default class BasePage {

    open(url: string) {
        cy.visit(url)
        return this
    }

    waitForPageLoad() {
        cy.waitForPageLoad()
        return this
    }

    goBack() {
        cy.go('back')
        return this
    }
}