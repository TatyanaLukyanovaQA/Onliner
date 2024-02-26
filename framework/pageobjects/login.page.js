import { $ } from '@wdio/globals'
import BasePage from './base.page.js';

class LoginPage extends BasePage {
    constructor() {
        super('Login Page');
    }

    get inputUsername () {
        return $('input[class^="auth-input"]');
    }

    get inputPassword () {
        return $('input[type="password"]');
    }

    get btnSubmit () {
        return $('button[class^="auth-button"]');
    }
    
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
