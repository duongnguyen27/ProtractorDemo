var CommonFunctions = function () {

    var EC = protractor.ExpectedConditions;
    var defaultTimeout = 150000;
    var shortWait = 3000;

    this.waitUntilElementIsVisible = function (element, timeout) {
        var t = (typeof timeout !== 'undefined') ?  timeout : defaultTimeout;
        try {
            browser.wait(EC.visibilityOf(element), t);
        }
        catch (err){
            console.log(err);
        }
    }

    this.sleepShort = function () {
        browser.sleep(shortWait);
    }

    this.clickElement =  function (element, timeout) {
        this.waitUntilElementIsVisible(element, timeout);
        element.click();
    }

    this.inputText = function (element, text, timeout) {
        this.waitUntilElementIsVisible(element, timeout);
        element.sendKeys(text);
    }
    
    this.isElementVisible = function (element, timeout) {
        var t = (typeof timeout !== 'undefined') ?  timeout : defaultTimeout;
        try {
            browser.wait(EC.visibilityOf(element), t);
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
}

module.exports = CommonFunctions;