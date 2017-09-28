const purchasePage = require('../page-objects/purchase.page.js');

module.exports = function(){
    this.Given(/^I go to amazon home page$/, function () {
        return helpers.loadPage(purchasePage.url, 30);
    });

    this.When(/^I login with username "([^"]*)" and password "([^"]*)"$/, function* (accountName, accountPassword) {
        yield purchasePage.navigateToLoginPage();
        yield purchasePage.login(accountName,accountPassword);
    });

    this.Then(/^I should see the account name is "([^"]*)"$/, function* (accout) {
         yield purchasePage.verify();
    });
};

//
// module.exports = function(){
//     this.Given(/^I go to amazon home page$/, function () {
//         let amazonPurchase = page.amazonPurchase;
//         return helpers.loadPage(amazonPurchase.url, 30);
//     });
//
//     this.When(/^I login with username "([^"]*)" and password "([^"]*)"$/, function* (accountName, accountPassword) {
//          let amazonPurchase = page.amazonPurchase;
//          let elements = amazonPurchase.elements;
//
//          yield driver.click(elements.navigation);
//          yield driver.setValue(elements.username, accountName);
//          yield driver.setValue(elements.password, accountPassword);
//          yield driver.click(elements.login_button);
//     });
//
//     this.Then(/^I should see the account name is "([^"]*)"$/, function (accout) {
//         let amazonPurchase = page.amazonPurchase;
//         return amazonPurchase.verifyAccout(accout);
//     });
// };

