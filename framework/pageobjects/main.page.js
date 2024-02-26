import BasePage from './base.page.js';

import * as urls from '../../test_data/urls.json' with { type: "json" };

class MainPage extends BasePage {
    constructor() {
        super('Main Page');
    }

    get btnToLoginPage () {
        return $('div[class$="auth-bar__item--text"]');
    }

    get userAvatar () {
        return $('div[class$="user-avatar"]');
    }

    get productSearchField () {
        return $('[class="fast-search__input"]');
    }

    async open() {
        await super.open(urls.default.mainPage);
    }

    async goToLoginPage() {
        await this.btnToLoginPage.click();
    }

    async searchProduct(productName){
        await browser.waitUntil(() => this.productSearchField.isDisplayed());
        await this.productSearchField.setValue(productName);
    }
}

export default new MainPage();
