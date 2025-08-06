

class OrderSummary {

    private readonly buyBtn: string

    constructor() {
        this.buyBtn = 'button[data-testid="buynow-button"]'
    }

    isOrderSummaryVisible(course: string) {
        cy.get('h4')
            .contains('Order Summary')
            .should('be.visible')
        cy.get('div')
            .contains(course)
            .should('be.visible')
        return this
    }
}

export default new OrderSummary()