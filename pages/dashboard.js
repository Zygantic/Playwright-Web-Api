exports.Dashboard = class Dashboard{

    constructor(page){
        this.page = page;
        this.adminLink = '(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]';
        this.pimLink = '(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[2]';
        this.userDropdown = '//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]';
        this.logout = '//a[@href="/web/index.php/auth/logout"]';
    
    }
    
    async link_Pim(){
        await this.page.click(this.pimLink);
    }
    async link_logout(){
        await this.page.click(this.userDropdown);
        await this.page.click(this.logout);
        
    }
    
    }