import { UserInformation } from "../utils/types";


class Registration {

    private readonly formContainer: string;
    private readonly name: string;
    private readonly phone: string;
    private readonly email: string;
    private readonly country: string;
    private readonly city: string;
    private readonly username: string;
    private readonly password: string;

    constructor() {
        this.formContainer = 'div#load_box #load_form'
        this.name = 'fieldset input[name="name"]';
        this.phone = 'fieldset input[name="phone"]';
        this.email = 'fieldset input[name="email"]';
        this.country = 'fieldset select[name="country"]';
        this.city = 'fieldset input[name="city"]';
        this.username = 'fieldset input[name="username"]';
        this.password = 'fieldset input[name="password"]';
    }

    isRegistrationFormVisible() {
        cy.get(this.formContainer)
            .should('be.visible')
    }

    isRegistrationSuccessful() {
        cy.get(this.formContainer)
            .find('#alert')
            .should('be.visible')
    }

    fillRegistrationForm(information: UserInformation) {
        cy.get(this.name)
            .should('be.visible')
            .type(information.name);

        cy.get(this.phone)
            .should('be.visible')
            .type(information.phone);

        cy.get(this.email)
            .should('be.visible')
            .type(information.email);

        cy.get(this.city)
            .should('be.visible')
            .type(information.city);

        cy.get(this.formContainer)
            .find(this.username)
            .should('be.visible')
            .type(information.username);

        cy.get(this.formContainer)
            .find(this.password)
            .should('be.visible')
            .type(information.password);
        
        return this
    }

    selectCountry(country: string) {
        cy.get(this.country)
            .should('be.visible')
            .select(country)
        return this
    }

    clickSubmitButton() {
        cy.get(this.formContainer)
            .find('input[type="submit"]')
            .click()
        return this
    }
}

export default new Registration()