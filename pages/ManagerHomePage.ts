import { element, by, browser, ExpectedConditions } from "protractor";
import { assert } from "chai";

export class ManagerHomePage
{
    addCustomerButton: any;
    openAccountButton: any;
    customersButton: any;
    constructor() {

        this.addCustomerButton = element(by.partialButtonText("Add Customer"));
        this.openAccountButton = element(by.partialButtonText("Open Account"));
        this.customersButton = element(by.partialButtonText("Customers"));
    }

    public async VerifyManagerLogin()
    {
        //await browser.wait(ExpectedConditions.visibilityOf(this.addCustomerButton),5000);
        let visible: boolean = await this.addCustomerButton.isDisplayed();
        assert.isTrue(visible, "Add Customer Button Not Dispalyed");

        visible = await this.openAccountButton.isDisplayed();
        assert.isTrue(visible, "Open Account Button Not Dispalyed");

        visible = await this.customersButton.isDisplayed();
        assert.isTrue(visible, "Customers Button Not Dispalyed");
    }

    public async InitiateNewCustomerCreation()
    {
        await this.addCustomerButton.click();
    }

    public async GetCustomers()
    {
        await this.customersButton.click();
    }


}