import BasePage from './base.page.js';

import * as urls from '../../test_data/urls.json' with { type: "json" };

class CartPage extends BasePage {
    constructor() {
        super('Cart Page');
    }

    get catImage() {
        return $('[class*="image_cat"]');
    }

    async open() {
        await super.open(urls.default.cartPage);
    }
}

export default new CartPage();
