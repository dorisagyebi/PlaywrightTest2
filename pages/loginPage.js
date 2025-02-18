import { selectors } from '../test-data/selectors.js';
import { config } from '../config.js';

export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(config.baseUrl);
    }

    async login(email, password) {
        await this.page.locator(selectors.login.menuButton).click();
        await this.page.locator(selectors.login.loginNavButton).click();
        await this.page.locator(selectors.login.emailField).fill(email);
        await this.page.locator(selectors.login.passwordField).fill(password);
        await this.page.locator(selectors.login.submitButton).click();
    }

    async isWelcomeMessageVisible() {
        return await this.page.locator(selectors.login.welcomeMessage).isVisible();
    }
}
