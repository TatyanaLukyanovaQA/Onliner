import { Given, When } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import axios from 'axios';

import * as urls from '../../test_data/urls.json' with { type: "json" };
import * as products from '../../test_data/products.json' with { type: "json" };

Given(/^I have added the product to the basket using Api$/, async () => {
    const response = await axios.post(urls.default.addProduct, products.default.addIPhone);
    await expect(response.status).toEqual(201);
});

When(/^I am removing a product from the basket using Api$/, async () => {
    const response = await axios.delete(urls.default.deleteProduct, products.default.iPhone);
    await expect(response.status).toEqual(204);
});