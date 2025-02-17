# Vercel App Automation Tests

## Overview
This project automates testing for the Vercel-based application (https://freelance-learn-automation.vercel.app/) using [Playwright](https://playwright.dev/).
It includes test cases for verifying course listings, user login, and new user signup.

## Technologies Used
- **Playwright**: For browser automation and testing
- **JavaScript**: Primary scripting language
- **Faker.js**: For generating random test data

## Prerequisites
Before running the tests, ensure you have the following installed:
- **Node.js (>=16.x)**
- **Playwright** (install via `npm`)

### Installation
Clone the repository and install dependencies:
```sh
npm install
```
To install Playwright browsers, run:
```sh
npx playwright install
```

## Test Cases
The test suite includes the following automated tests:

### 1. Verify Course Count on Homepage
- Navigates to the homepage
- Validates the page URL and title
- Checks that at least one course is listed

### 2. Verify Welcome Message After Login
- Opens the login page via the navigation menu
- Verifies the ability to navigate between login and signup pages
- Logs in with test credentials
- Asserts that the welcome message is displayed

### 3. Verify New User Signup
- Fills out the signup form with randomly generated user data
- Selects interests, gender, state, and hobbies
- Submits the form
- Ensures successful account creation

## Running the Tests
Execute the tests using the following command:
```sh
npx playwright test
```

To run tests in headed mode (visible browser window):
```sh
npx playwright test --headed
```

To run a specific test file:
```sh
npx playwright test tests/example.spec.js
```

## Folder Structure
```
project-root/
│── tests/
│   ├── automation.vercel.app.spec.js
│── package.json
│── playwright.config.js
│── README.md
```
