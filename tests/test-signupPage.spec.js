import { test} from '@playwright/test';
import { SignupPage } from '../pages/signupPage.js';

test('Should complete signup successfully', async ({ page }) => {
    const signupPage = new SignupPage(page);
    await signupPage.navigate();
    await signupPage.fillSignupForm();
});