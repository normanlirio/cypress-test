
import Course from "./Course";

class Lectures extends Course {

    private readonly lessonLockedTitle: string
    private readonly navIconBack: string

    constructor() {
        super()
        this.lessonLockedTitle = '.lecture-contents-locked'
        this.navIconBack = '.nav-icon-back'
    }

    isLessonLockedTitleVisible() {
        cy.get(this.lessonLockedTitle)
            .should('be.visible')
        return this
    }

    clickNavIconBack() {
        cy.get(this.navIconBack)
            .should('be.visible')
            .click()
        return this
    }
}

export default new Lectures()