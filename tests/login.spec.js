const {test} = require('@playwright/test');
const {LoginPage} = require('../pages/loginPage');
    
    
const multiple_login_credentials = JSON.parse(JSON.stringify(require('../tests-data/login-data.json')));

for(const user of multiple_login_credentials){
test(`user should be able to login only with valid username and password@reg: ${user.Username} and ${user.Password}`, async ({page}) => {
    const login = new LoginPage(page);
    const username = user.Username;
    const password = user.Password;
    await login.gotoLoginPage();
    await login.login(username, password);
    await page.waitForTimeout(2000);
})
}