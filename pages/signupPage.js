import { selectors } from '../test-data/selectors.js';
import { config } from '../config.js';
import { faker } from '@faker-js/faker/locale/en';
export class SignupPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(`${config.baseUrl}signup`);
    }

    async fillSignupForm() {
        await this.page.locator(selectors.signup.nameField).fill(faker.internet.userName());
        await this.page.locator(selectors.signup.emailField).fill(faker.internet.email());
        await this.page.locator(selectors.signup.passwordField).fill(faker.internet.password());
        await this.page.locator(selectors.signup.genderFemale).click();
        await this.page.locator(selectors.signup.stateDropdown).selectOption('Assam');
        await this.page.locator(selectors.signup.hobbiesDropdown).selectOption(['Swimming', 'Singing']);
        await this.page.locator(selectors.signup.submitButton).click();
    }
}