import BasePage from "./BasePage";

class MembershipClub extends BasePage {

    private readonly nextSlide: string
    private readonly slide: string
    private readonly freeAccessTitle: string

    constructor() {
        super()
        this.nextSlide = 'div[aria-label="Next slide"]'
        this.slide = 'div.swiper-container-wrap div.swiper-slide-next'
        this.freeAccessTitle = 'h2'
    }

    scrollToFreeAccessTitle() {
        cy.get(this.freeAccessTitle)
            .contains('30+ Courses video library FREE ACCESS')
            .should('be.visible')
            .scrollIntoView()
        return this
    }

    clickNextSlide() {
        for (let i = 0; i < 3; i++) {
            cy.get(this.nextSlide).click()
            cy.wait(500)
        }

        cy.get(this.slide)
            .wait(500)
            .find('.pp-info-box-button')
            .click()

        return this
    }

    isCourseVisible(course: string) {
        cy.get('h4')
            .contains(course)
            .should('')
    }
}

export default new MembershipClub()