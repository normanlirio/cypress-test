import Home from "../pages/Home"
import Registration from "../pages/Registration"
import { FIXTURE_ACTIONS_FILE, FIXTURE_USERS_FILE, REGISTRATION_URL } from "../utils/constants"
import { UserInformation } from "../utils/types"


describe('Registration', () => {

  before(() => {
    cy.visit('https://www.way2automation.com/demo.html#')
  })

  it('should retrieve the target url from Submit Button Clicked Event', () => {
  
    cy.fixture(FIXTURE_ACTIONS_FILE)
      .then((data) => {
        const submitButtonText = data["Dynamic Elements"].find(item =>
          item === "Submit Button Clicked"
        );

        Home.getTargetUrl(submitButtonText).then((url) => {
          expect(url).equal(REGISTRATION_URL)
        })

        Home.visitTargetUrl(submitButtonText)
        Registration.isRegistrationFormVisible()
      })
  })

  it('should register a new user', () => {
    cy.fixture(FIXTURE_USERS_FILE)
      .then((info) => {
        let userInformation: UserInformation = info
        Registration.fillRegistrationForm(userInformation)
          .selectCountry('Philippines')
          .clickSubmitButton()
          .isRegistrationSuccessful()
      })
  })

})