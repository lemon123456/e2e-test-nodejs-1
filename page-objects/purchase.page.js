const Page = require('./page');

const purchasePage = Object.create(Page, {
    url: {
        get: function () {
            return 'https://www.amazon.cn/';
        }
    },
    open: {
        value: function () {
            Page.open.call(this, '/');
        }
    },
    navigation: {
        get: function () {
            return driver.element('#nav-signin-tooltip > a > span');
        }
    },
    username: {
        get: function () {
            return driver.elements('#ap_email');
        }
    },
    password: {
        get: function () {
            return driver.element('#ap_password');
        }
    },
    signButton: {
        get: function () {
            return driver.element('#signInSubmit');
        }
    },
    verifyButton: {
        get: function () {
            return driver.element('#nav-link-yourAccount > span.nav-line-1');
        }
    },
    navigateToLoginPage: {
        value: function*() {
            yield this.navigation.click();
        }
    },
    login: {
        value: function*(username, password) {
            yield this.username.setValue(username);
            yield this.password.setValue(password);
            yield this.signButton.click();
        }
    },
    verify: {
        value: function*() {
            yield this.verifyButton.click();
        }
    }
});

module.exports = purchasePage;

