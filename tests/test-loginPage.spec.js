import { test} from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import {email, password} from '../test-data/test_data.json';

test('Verify welcome message after successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(email, password);
    await loginPage.isWelcomeMessageVisible();
});
