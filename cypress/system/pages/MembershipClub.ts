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

    //TODO: add dynamic limit
    selectCourse(course: string, attempt = 0) {
        if (attempt >= 10) {
            throw new Error(`Course "${course}" not found after 10 attempts`);
        }
    
        cy.get(this.slide)
            .invoke('text')
            .then((text) => {
                if (text.includes(course)) {
                    cy.log("PASOOK MEEEN");
                    cy.get(this.slide)
                        .find('.pp-info-box-button')
                        .click();
                } else {
                    //Carousel doesn't load quick enough
                    cy.get(this.nextSlide, { timeout: 60000 })
                        .click()
                        .wait(500);
                    this.selectCourse(course, attempt + 1); // recursive call
                }
            });
    
        return this;
    }
    
    

    isCourseVisible(course: string) {
        cy.get('h4')
            .contains(course)
            .should('')
    }
}

export default new MembershipClub()