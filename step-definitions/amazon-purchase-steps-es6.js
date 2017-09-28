const purchasePage = require('../page-objects/purchase.page-es6.js');

module.exports = function(){
    this.Given(/^I go to amazon home page$/, function () {
        return purchasePage.open();
    });

    this.When(/^I login with username "([^"]*)" and password "([^"]*)"$/, function* (accountName, accountPassword) {
        // yield purchasePage.navigateToLoginPage();
        yield purchasePage.navigation.click();
        yield purchasePage.login(accountName,accountPassword);
    });

    this.Then(/^I should see the account information$/, function* () {
         yield purchasePage.verify();
    });
};


