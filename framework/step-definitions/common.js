import { Given } from '@wdio/cucumber-framework';

import MainPage from '../pageobjects/main.page.js';
import CartPage from '../pageobjects/cart.page.js';

const pages = {
    main: MainPage,
    cart: CartPage
}

Given(/^I am on the (\w+) Onliner page$/, async (page) => {
    await pages[page].open();
});

Then(/^The basket should be empty$/, async () => {
    await expect(CartPage.catImage).toBeExisting();
});
