var LoginPage = function (){
    this.txtUsername = element(by.id('Username'));
    this.txtPassword = element(by.id('Password'));
    this.btnLogin = element(by.xpath('.//footer/button'));
    this.errMessage = element(by.xpath("//div[@class='validation-summary-errors field-validation-error']//li"));
    this.message = 'User ID and/or password is incorrect.';

    var com = new common();

    this.goToLoginPage = function (url) {
        browser.get(url);
    }

    this.loginApp = function (username, password) {
        com.inputText(this.txtUsername, username);
        com.inputText(this.txtPassword, password);
        com.clickElement(this.btnLogin);
    }

    this.verifyErrorMessageDisplay = function () {
        com.verifyElementContainsText(this.errMessage, this.message);
    }
}

module.exports = LoginPage;