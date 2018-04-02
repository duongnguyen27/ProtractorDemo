exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['../FirstProtractorTest/tests/*.js'],
    capabilities: {
        browserName: 'chrome'
    },

    //**************************  On Prepare   ********************
    onPrepare: function () {
        /**
         * global parameter declarations -  can be used across all Page Objects
         */
        common = require('../FirstProtractorTest/utils/CommonFunctions.js');
        data = require('../FirstProtractorTest/data/generalData.json');
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();   // Setting window size - Can set any specifics
    }
}