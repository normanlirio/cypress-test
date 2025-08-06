import Lectures from "../pages/Lectures"
import MembershipClub from "../pages/MembershipClub"
import OrderSummary from "../pages/OrderSummary"
import Registration from "../pages/Registration"
import { ORDER_SUMMARY_URL, SELENIUM_PROJECT_NAME, SELENIUM_PROJECT_URL } from "../utils/constants"
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

  it('should successfully enroll to a course', () => {
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
    
    Lectures.clickEnrollButton()
      .retrieveEnrollBtnText()
      .then((text) => {
        expect(text).to.equal('Processing...')
      })
    
  })

  it.skip('should verify Order summary page', () => {
      cy.visit(ORDER_SUMMARY_URL)
      OrderSummary.isOrderSummaryVisible(SELENIUM_PROJECT_NAME)
  })

  after(() => {
    cy.screenshot('full-page', { capture: 'fullPage' });
  })

})