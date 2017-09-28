const Page = require('./page-es6');

const url = 'https://www.amazon.cn/';

class PurchasePage {
    constructor() {
    }

    open() {
        return driver.url(url);
    }

    get navigation() {
        return driver.element('#nav-signin-tooltip > a > span');
    }

    get username() {
        return driver.elements('#ap_email');
    }

    get password(){
        return driver.element('#ap_password');
    }

    get signButton() {
        return driver.element('#signInSubmit');
    }

    get verifyButton() {
        return driver.element('#nav-link-yourAccount > span.nav-line-1');
    }

    * navigateToLoginPage () {
        yield this.navigation.click();
    }

    * login(username, password) {
        yield this.username.setValue(username);
        yield this.password.setValue(password);
        yield this.signButton.click();
    }

    * verify() {
        // yield this.verifyButton.click();
    }
}
module.exports =new PurchasePage();

