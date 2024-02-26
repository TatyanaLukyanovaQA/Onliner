import BasePage from './base.page.js';

class ProductsListPage extends BasePage {
    constructor() {
        super('Products Page');
    }

    get firstProduct() {
        return $('[class="product__title-link"]');
    }

    get products() {
        return $$('[class="product__title-link"]').slice(0, 10);
    }

    async switchToProductsFrame() {
        const iFrame = await $('iframe[class="modal-iframe"]');
        await browser.switchToFrame(iFrame);
    }

    async switchToDefaultFrame() {
        await browser.switchToFrame(null);
    }

    async areAllProductsContain(productName) {
        await this.switchToProductsFrame();
        await browser.waitUntil(() => this.firstProduct.isDisplayed());

        let isProductTextMatches = true;
        const elements = await this.products;

        for await (const product of elements) {
            const text = await product.getText();
            if (!text.includes(productName)){
                isProductTextMatches = false;
            }
        }

        await this.switchToDefaultFrame();
        return isProductTextMatches;
    }

    async clickOnFirstProduct() {
        await this.switchToProductsFrame();
        await this.firstProduct.click();
        await this.switchToDefaultFrame();
    }
}

export default new ProductsListPage();
