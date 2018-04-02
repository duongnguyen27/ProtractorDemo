var DisciplinesPage = function () {
    this.menuDisciplines = element(by.xpath("//a[@class='disciplines']"));
    this.btnSearchForDisciplines = element(by.xpath("//h3[text()='Search for Disciplines']"));
    this.txtSearch = element(by.xpath("//input[@id='search-nameFilter']"));
    this.btnSearch = element(by.xpath("//button[@id='btnPerformSearch']"));
    this.lblDisciplineNames = element.all(by.xpath("//tbody[@role='rowgroup']/tr/td/span/a[1]"));

    var com = new common();

    this.searchForDisciplines = function (text) {
        com.clickElement(this.menuDisciplines);
        com.clickElement(this.btnSearchForDisciplines);
        com.sleepShort(); // Wait for the search box to slide down
        com.inputText(this.txtSearch, text);
        com.clickElement(this.btnSearch);
        com.sleepShort();
    }

    this.verifySearchResult = function (expectedText) {
        this.lblDisciplineNames.each(function (item) {
            item.getText().then( function (actualText) {
                expect(actualText.toLowerCase()).toContain(expectedText.toLowerCase());
            })
        })
    }
}

module.exports = DisciplinesPage;