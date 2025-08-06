import BasePage from "./BasePage";

class Course extends BasePage {

    private readonly moreLectureBtn: string
    private readonly sectionItem: string
    private readonly payOptionsRadioGroup: string

    constructor() {
        super()
        this.moreLectureBtn = '#more_lecture_sections'
        this.sectionItem = '.section-item'
        this.payOptionsRadioGroup = 'div[data-toggle="buttons"]'
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
}

export default Course