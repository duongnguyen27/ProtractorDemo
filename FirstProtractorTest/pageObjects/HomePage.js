var HomePage = function(){
    this.iconMenu = element(by.id('top-menu-handle'));
    this.menuAuthoring = element(by.xpath("//*[@class='top-menu-item_authoring']/a"));
    this.menuLogout = element(by.xpath("//*[@class='top-menu-item_logout']/a"));

    var com = new common();
    
    this.verifyHomepageDisplay = function () {
        var isVisible = com.isElementVisible(this.iconMenu);
        expect(isVisible).toBe(true);
    }

    this.goToAuthoringPage = function(){
        com.clickElement(this.iconMenu);
        com.clickElement(this.menuAuthoring);
    }
    
    this.logOut = function () {
        com.clickElement(this.iconMenu);
        com.clickElement(this.menuLogout);
    }
}

module.exports = HomePage;