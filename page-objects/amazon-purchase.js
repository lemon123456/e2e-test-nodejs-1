module.exports = {
    url: 'https://www.amazon.cn/',
    elements: {
        navigation: ('#nav-signin-tooltip > a > span'),
        username: ('#ap_email'),
        password: ('#ap_password'),
        login_button: ('#signInSubmit'),
        account: ('#nav-link-yourAccount > span.nav-line-1')
    },

    login: function (accountName, accountPassword) {
        // return driver.element('#nav-signin-tooltip > a > span').click().then(function(){
        return driver.click('#nav-signin-tooltip > a > span').pause(2000).then(function () {

            // driver.element(page.amazonPurchase.elements.username, driver.keys(accountName));
            driver.setValue('#ap_email', accountName);
            console.log(accountName);
        }).pause(2000).then(function () {
            // driver.element(page.amazonPurchase.elements.password, driver.keys(accountPassword));
            driver.setValue('#ap_password', accountPassword);
            console.log(accountPassword);
        }).pause(2000).then(function () {
            // driver.element('#signInSubmit').click();
            return driver.click('#signInSubmit');
        });
    },

    verifyAccout: function (accountInfo) {
        return expect(driver.isExisting('#nav-link-yourAccount > span.nav-line-1')).to.be.ok;
    }
};