var login = require('./../pageObjects/LoginPage');
var home = require('./../pageObjects/HomePage');

describe('Login function', function () {

    var loginPage = new login();
    var homePage = new home();

    it('Login application', function () {
        loginPage.goToLoginPage(data['baseUrl']);
        loginPage.loginApp(data['username'], data['password']);
    })

    it('Verify login success', function () {
        homePage.verifyHomepageDisplay();
    })

    it('Log out application', function () {
        homePage.logOut();
    })
})