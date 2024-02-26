import { When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import MainPage from '../pageobjects/main.page.js';
import ProductsListPage from '../pageobjects/productsList.page.js';
import ProductPage from '../pageobjects/product.page.js';

import * as messages from '../../test_data/messages.json' with { type: "json" };

When(/^I enter (\w+) in the search bar$/, async (productName) => {
    await MainPage.searchProduct(productName);
});

When(/^I click on the first search result$/, async () => {
    await ProductsListPage.clickOnFirstProduct();
});

When(/^I add first product to the basket$/, async () => {
    await ProductPage.addToBasketFirstOffer();
});

Then(/^I should see search results for (\w+)$/, async (productName) => {
    expect(await ProductsListPage.areAllProductsContain(productName)).toBeTruthy();
});

Then(/^The product added to basket message should be displayed$/, async () => {
    expect(await ProductPage.getHaderOfSideBar()).toEqual(messages.default.productToBasket);
});
