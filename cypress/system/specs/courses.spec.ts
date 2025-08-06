import Course from "../pages/Course"
import Lectures from "../pages/Lectures"
import MembershipClub from "../pages/MembershipClub"
import Registration from "../pages/Registration"
import { SELENIUM_PROJECT_URL } from "../utils/constants"
import { ModalLinks, PaymentOptions } from "../utils/types"


describe('Courses', () => {
  it('should verify correct URL', () => {
    Registration.clickModalLink(ModalLinks.membership)
    MembershipClub.waitForPageLoad()
      .scrollToFreeAccessTitle()
      .clickNextSlide()
    cy.url().then(url => {
      expect(url).to.eq(SELENIUM_PROJECT_URL);
    });
  })

  it.only('should successfully enroll to a course', () => {
    Lectures.open(SELENIUM_PROJECT_URL)
      .clickMoreLectureButton()
      .clickStart('CucumberParallelTest - Project Code')
      .waitForPageLoad()
      .isLessonLockedTitleVisible()
      .clickNavIconBack()
      .clickAPaymentOption(PaymentOptions.usd)
    
    Lectures.retrievePrice(PaymentOptions.usd)
      .then((price) => {
        expect(price).to.contain('$29')
      })
  })

})