exports.LoginPage = class LoginPage {

    constructor(page){
        this.page = page;
        this.usernameInput = '//input[@name="username"]';
        this.passwordInput = '//input[@name="password"]';
        this.loginButton = '//button[@type="submit"]';
        this.invalid_credentail = '//h5[@class="oxd-text oxd-text--h5 orangehrm-login-title"]';
        this.text = '//p[@class="oxd-text oxd-text--p"]'
        this.text_verifyLogin = '//h5[@class="oxd-text oxd-text--h5 orangehrm-login-title"]';
    }

    async gotoLoginPage(){
        await this.page.goto('/');
    }

    async getInvalid_credentail(){
        return await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username, password){
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}
