exports.LoginPage = class LoginPage {

    constructor(page){
        this.page = page;
        this.usernameInput = '//input[@name="username"]';
        this.passwordInput = '//input[@name="password"]';
        this.loginButton = '//button[@type="submit"]';
    }

    async gotoLoginPage(){
        await this.page.goto('/');
    }

    async login(username, password){
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}
