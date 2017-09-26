module.exports = {
    url: 'https://www.amazon.cn/',
    elements: {
        navigation: ('#nav-link-yourAccount'),
        username: ('#ap_email'),
        password: ('#ap_password'),
        login_button: ('#signInSubmit'),
        account: ('#hud-customer-name > div > a')
    },

    login: function (accountName, accountPassword) {
        driver.click(page.amazonPurchase.elements.navigation);
        driver.setValue(page.amazonPurchase.elements.username, accountName);
        driver.setValue(page.amazonPurchase.elements.password, accountPassword);
        driver.click(page.amazonPurchase.elements.login_button);
    },

    verifyAccout: function (accountInfo) {
        var value = driver.getValue(page.amazonPurchase.elements.account);
        console.log(value);
        expect(value).to.be.equal(accountInfo);
    }
};