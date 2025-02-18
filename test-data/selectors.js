export const selectors = {
    home: {
        courseCards: "//div[@class='home-container']"
    },
    login: {
        menuButton: "//img[@alt='menu']",
        loginNavButton: "//button[contains(@class, 'nav-menu-item')]",
        emailField: "//input[@id='email1']",
        passwordField: "//input[@id='password1']",
        submitButton: "//button[@type='submit']",
        welcomeMessage: "//div[contains(@class, 'welcomeMessage')]"
    },
    signup: {
        nameField: "//input[@id='name']",
        emailField: "//input[@id='email']",
        passwordField: "//input[@id='password']",
        genderFemale: "//input[@id='gender2']",
        stateDropdown: "//select[@id='state']",
        hobbiesDropdown: "//select[@id='hobbies']",
        submitButton: "//button[@type='submit']"
    }
};
