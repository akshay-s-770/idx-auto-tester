/**
 * Fill Reset Password Form with given data
 */
let router = require('../../route.js');
let elements = require(router.locators);


exports.command = function (resetPassword) {

    this.waitForElementVisible(elements.authPage.resetPassword.newPasswordLocator, 30000, false);
    this.setValue(elements.authPage.resetPassword.newPasswordLocator, resetPassword);
    this.setValue(elements.authPage.resetPassword.confirmPasswordLocator, resetPassword);
    this.click(elements.authPage.resetPassword.resetPasswordButtonLocator);

    return this;
};