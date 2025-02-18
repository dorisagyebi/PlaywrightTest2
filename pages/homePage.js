const { expect } = require('@playwright/test');
import { selectors } from '../test-data/selectors.js';
import { config } from '../config.js';

export class HomePage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(config.baseUrl);
    }

    async verifyCourseCount() {
        const courseCount = await this.page.locator(selectors.home.courseCards).count();
        //return courseCount > 0;
        expect(courseCount).toBeGreaterThan(0);
    }
}
