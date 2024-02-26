import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import MainPage from '../pageobjects/main.page.js';
import LoginPage from '../pageobjects/login.page.js';

import * as users from '../../test_data/users.json' with { type: "json" };

Given(/^I am logged in as Test User$/, async () => {
    await MainPage.goToLoginPage();
    await LoginPage.login(users.default.test_user.login, users.default.test_user.password);
});

When(/^I open login page$/, async () => {
    await MainPage.goToLoginPage();
});

When(/^I login as Test User$/, async () => {
    await LoginPage.login(users.default.test_user.login, users.default.test_user.password);
});

Then(/^I should be logged in successfully$/, async () => {
    await expect(MainPage.userAvatar).toBeExisting();
});
