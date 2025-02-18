import { test} from '@playwright/test';
import { HomePage } from '../pages/homePage.js';

test('Verify course count on the homepage', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.verifyCourseCount();
});
