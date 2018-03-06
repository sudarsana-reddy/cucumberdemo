import { $, by, element, browser, until, ElementFinder, WebElement, ExpectedConditions } from "protractor";
import {expect,assert} from 'chai';

export class HomePage {
   public searchButton: any;
   public logOut: any;
   public managerLogin: any;
    
    constructor() {      
        this.managerLogin = element(by.buttonText("Bank Manager Login"));
    }

    public async LoginAsManager()
    {   
        await browser.wait(ExpectedConditions.visibilityOf(this.managerLogin),5000);
        let visible: boolean = await this.managerLogin.isDisplayed();
        assert.isTrue(visible,"Manager Login Button Not displayed");      
        await this.managerLogin.click();            
      }
}