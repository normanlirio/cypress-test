import Home from "../pages/Home"
import MembershipClub from "../pages/MembershipClub"
import Registration from "../pages/Registration"
import { FIXTURE_ACTIONS_FILE, FIXTURE_USERS_FILE, REGISTRATION_URL } from "../utils/constants"
import { ModalLinks, UserInformation } from "../utils/types"



describe('Courses', () => {
  it('should verify correct URL', () => {
    Registration.clickModalLink(ModalLinks.membership)
    MembershipClub.waitForPageLoad()
      .scrollToFreeAccessTitle()
      .clickNextSlide()
    cy.url().then(url => {
      expect(url).to.eq('https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects');
    });
  })

})