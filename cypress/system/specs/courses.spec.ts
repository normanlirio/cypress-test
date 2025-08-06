import Home from "../pages/Home"
import Lectures from "../pages/Lectures"
import MembershipClub from "../pages/MembershipClub"
import OrderSummary from "../pages/OrderSummary"
import Registration from "../pages/Registration"
import { FIXTURE_ACTIONS_FILE, ORDER_SUMMARY_URL, SELENIUM_PROJECT_NAME, SELENIUM_PROJECT_URL } from "../utils/constants"
import { ModalLinks, PaymentOptions } from "../utils/types"


describe('Courses', () => {
  before(() => {
    Home.open('/')
    cy.fixture(FIXTURE_ACTIONS_FILE)
      .then((data) => {
        const submitButtonText = data["Dynamic Elements"].find(item =>
          item === "Submit Button Clicked"
        );
        Home.visitTargetUrl(submitButtonText)
      })
    Registration.clickModalLink(ModalLinks.membership)
  })

  it('should be successfully open course, lecture and proceed to checkout', () => {
    MembershipClub.waitForPageLoad()
      .scrollToFreeAccessTitle()
      .selectCourse(SELENIUM_PROJECT_NAME)
    cy.url().then(url => {
      expect(url).to.eq(SELENIUM_PROJECT_URL);
    });

    Lectures.clickMoreLectureButton()
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