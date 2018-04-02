var login = require('./../pageObjects/LoginPage.js');
var home = require('./../pageObjects/HomePage.js');
var disciplines = require('./../pageObjects/DisciplinesPage.js');

describe('Disciplines function', function () {

    var loginPage = new login();
    var homePage = new home();
    var disciplinesPage = new disciplines();
    var searchTerm = 'Au';

    it('Login application', function () {
        loginPage.goToLoginPage(data['baseUrl']);
        loginPage.loginApp(data['username'], data['password']);
    })

    it('Search for Disciplines', function () {
        homePage.goToAuthoringPage();
        disciplinesPage.searchForDisciplines(searchTerm);
    })

    it('Verify search result contains search term', function () {
        disciplinesPage.verifySearchResult(searchTerm);
    })

    it('Log out application', function () {
        homePage.logOut();
    })
})