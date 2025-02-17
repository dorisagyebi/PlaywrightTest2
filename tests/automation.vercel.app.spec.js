import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker/locale/en'

test.describe('Vercel App Automation Tests', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://freelance-learn-automation.vercel.app/');
    });

    test('Verify course count on the homepage', async ({ page }) => {
        await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/');
        await expect(page).toHaveTitle('Learn Automation Courses');

        const courseContainer = await page.locator('.home-container .course-card').count(); 
        expect(courseContainer).toBeGreaterThan(0);
    });

    test('Verify welcome message after successful login', async ({ page }) => {
        await page.locator("img[alt='menu']").click();
        await page.locator("button.nav-menu-item").click();
        await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/login');


        // Verify "New User" link is clickable
        const newUserLink = page.locator(".subLink");
        await newUserLink.click();
        await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/signup');

        // Navigate back & log in
        await newUserLink.click();
        await page.locator("#email1").fill("doricyj@gmail.com");
        await page.locator("#password1").fill("TH3@TOMATIONQU33N");
        await page.locator("button[type='submit']").click();

        await expect(page.locator(".welcomeMessage")).toBeVisible();
    });

    test.describe('New User Signup', () => {
        test('Should complete signup successfully', async ({ page }) => {
            await page.goto("https://freelance-learn-automation.vercel.app/signup");
            await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/signup");

            const username = faker.internet.username();
            const email = faker.internet.exampleEmail();
            const password = faker.internet.password();


            await page.locator("#name").fill(username);
            await page.locator("#email").fill(email);
            await page.locator("#password").fill(password)


            // Select four interests
            const interests = [
                "label[for='67a36694289e9e7395cb3698']",
                "label[for='67a36698289e9e7395cb369d']",
                "label[for='67b2aaf4289e9e7395cbd7c9']",
                "label[for='6794b4a061eeae8823891cef']"
            ];
            for (const interest of interests) {
                await page.locator(interest).click();
            }

            // Select gender(female)
            await page.locator("#gender2").click();

            // Select state
            const stateDropdown = page.locator("#state");
            await stateDropdown.selectOption('Assam');
            await expect(stateDropdown).toHaveValue('Assam');

            // Select hobbies
            await page.locator("#hobbies").selectOption(['Swimming', 'Singing', 'Dancing', 'Reading']);

            // Submit form
            await page.locator("button[type='submit']").shouldBeVisible()
        });
    });

});
