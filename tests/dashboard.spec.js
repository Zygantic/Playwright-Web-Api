const {test} = require('@playwright/test');
const {LoginPage} = require('../pages/loginPage');
const {Dashboard} = require('../pages/dashboard');


test.describe("Add Employee", ()=> {

    let x = Math.floor((Math.random() * 1000) + 1)
    test.beforeEach(async({page})=> {
        const login = new LoginPage(page);
        const dashboard = new Dashboard(page);
        await login.gotoLoginPage();
        await login.login("Admin", "admin123");

    });
    test.afterEach(async({page})=> {
        const login = new LoginPage(page);
        const dashboard = new Dashboard(page);
        await dashboard.link_logout();
    });


test(`user should be able to add employees5@reg: `, async ({page}) => {
        const employee = {FirstName:`fN1a1me${x} `, MiddleName:"mN1a1me", LastName:"lN1am1e", EmployeeId:`e1eId${x}`, Username:`us1na${x}`, Password:"Password12", ConfirmPassword:"Password12"}
        console.log(employee.FirstName)
        const login = new LoginPage(page);
        const dashboard = new Dashboard(page);
        const pim = new Pim(page);
        await dashboard.link_Pim();
        await pim.addEmployeeButton();
        await pim.addEmployeeDetails(employee.FirstName, employee.MiddleName, employee.LastName, employee.EmployeeId, employee.Username, employee.Password, employee.ConfirmPassword);
        await page.waitForTimeout(5000);
    });
});