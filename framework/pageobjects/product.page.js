import BasePage from './base.page.js';

class ProductPage extends BasePage {
    constructor() {
        super('Product Page');
    }

    get firstBtnToBasket() {
        return $('//a[@data-shop-id and contains(@class, "primary")]');
    }

    get sideBarHeader() {
        return $('[class$="subheader"]');
    }

    async addToBasketFirstOffer() {
        await this.firstBtnToBasket.click();
    }

    async getHaderOfSideBar() {
        return await this.sideBarHeader.getText();
    }
}

export default new ProductPage();
