const { expect } = require('@playwright/test');

exports.Pim = class Pim {

    constructor(page){
        this.page = page;
        this.button_addEmployee = '//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]';
        this.input_FirstName = '//input[@class="oxd-input oxd-input--active orangehrm-firstname"]';
        this.input_MiddleName = '//input[@class="oxd-input oxd-input--active orangehrm-middlename"]';
        this.input_LastName = '//input[@class="oxd-input oxd-input--active orangehrm-lastname"]';
        this.input_EmployeeId = '(//input[@class="oxd-input oxd-input--active"])[2]';
        this.toggle_CreateLoginDetails = '//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]';
        this.input_Username = '(//input[@class="oxd-input oxd-input--active"])[3]';
        this.input_Password = '//div[@class="oxd-grid-item oxd-grid-item--gutters user-password-cell"]/div/div/input';
        this.input_ConfirmPassword = '//div[@class="oxd-form-row user-password-row"]/div/div[2]/div/div/input';
        this.button_Save = '//button[@type="submit"]';
    }

    async addEmployeeButton(){
        await this.page.click(this.button_addEmployee);
    }

    async addEmployeeDetails(fName, mName, lName, employeeId, username, password, cPassword){
        await this.page.fill(this.input_FirstName, fName);
        await this.page.fill(this.input_MiddleName, mName);
        await this.page.fill(this.input_LastName, lName);
        await this.page.fill(this.input_EmployeeId, employeeId);
        await this.page.click(this.toggle_CreateLoginDetails);
        await this.page.fill(this.input_Username, username);
        await this.page.fill(this.input_Password, password);
        await this.page.fill(this.input_ConfirmPassword, cPassword);
        await this.page.click(this.button_Save);
    }
}