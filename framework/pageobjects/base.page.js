export default class BasePage {
    constructor(name) {
        this.name = name;
    }

    async open(url) {
        await browser.url(url);
        await browser.maximizeWindow();
    }
}
