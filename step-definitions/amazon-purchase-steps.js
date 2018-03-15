/*
const purchasePage = require('../page-objects/purchase.page.js');

module.exports = function(){
    this.Given(/^I go to amazon home page$/, function () {
         return helpers.loadPage(purchasePage.url, 30);
    });

    this.When(/^I login with username "([^"]*)" and password "([^"]*)"$/, function* (accountName, accountPassword) {
        yield purchasePage.navigateToLoginPage();
        yield purchasePage.login(accountName,accountPassword);
    });

    this.Then(/^I should see the account information$/, function* () {
         yield purchasePage.verify();
    });
};

*/
