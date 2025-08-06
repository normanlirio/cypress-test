import BasePage from "./BasePage";

class Course extends BasePage {

    private readonly moreLectureBtn: string
    private readonly sectionItem: string
    private readonly payOptionsRadioGroup: string
    private readonly enrolButton: string

    constructor() {
        super()
        this.moreLectureBtn = '#more_lecture_sections'
        this.sectionItem = '.section-item'
        this.payOptionsRadioGroup = 'div[data-toggle="buttons"]'
        this.enrolButton = '#enroll-button'
    }

    clickMoreLectureButton() {
        cy.get(this.moreLectureBtn)
            .should('be.visible')
            .click()
        return this
    }
   
    clickStart(course: string) {
        cy.get(this.sectionItem)
            .contains(course)
            .scrollIntoView()
            .should('be.visible')
            .closest('a')
            .click()
        return this
    }


    clickAPaymentOption(option) {
        cy.get(this.payOptionsRadioGroup)
            .contains(option)
            .should('be.visible')
            .click()
        return this

    }

    retrievePrice(option) {
        cy.get(this.payOptionsRadioGroup)
            .contains(option)
            .should('be.visible')
            .find('span')
            .invoke('text')
            .as('price')
        return cy.get('@price')
    }

    clickEnrollButton() {
        cy.get(this.enrolButton)
            .should('be.visible')
            .click()
        return this
    }

    retrieveEnrollBtnText() {
        cy.get(this.enrolButton)
            .should('be.visible')
            .invoke('text')
            .as('enrollBtnText')
        return cy.get('@enrollBtnText')
    }
}

export default Course