module.exports = function(){
    this.Given(/^I go to amazon home page$/, function () {
        return helpers.loadPage(page.amazonPurchase.url, 30);
    });

    this.When(/^I login with username "([^"]*)" and password "([^"]*)"$/, function (accountName, accountPassword) {
        return page.amazonPurchase.login(accountName, accountPassword);
        // driver.waitForVisible(page.amazonPurchase.elements.navigation);
        // driver.click(page.amazonPurchase.elements.navigation);
        // driver.setValue(page.amazonPurchase.elements.username, accountName);
        // driver.setValue(page.amazonPurchase.elements.password, accountPassword);
        // driver.click(page.amazonPurchase.elements.login_button);
    });

    this.Then(/^I should see the account name is "([^"]*)"$/, function (accout) {
       return page.amazonPurchase.verifyAccout(accout);
    });
};