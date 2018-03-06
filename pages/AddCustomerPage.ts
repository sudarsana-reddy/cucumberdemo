import { element, by, browser, ExpectedConditions } from "protractor";
import { assert } from "chai";
import * as data from '../json/customer.json';

const customerCreationMessage = "Customer added successfully with customer id :[0-9]*";
var customerData = (<any>data);
export class AddCustomerPage{   
  
    firstName:any;
    lastName:any;
    postCode:any;
    addCustomerButton:any
    pattern:RegExp;
    idPattern:any
    customerId: string;   

    constructor(){
       
        this.firstName = element(by.model("fName"));
        this.lastName = element(by.model("lName"));
        this.postCode = element(by.model("postCd"));
        this.addCustomerButton = element(by.xpath("//button[text()='Add Customer']"));
        this.pattern = new RegExp(customerCreationMessage);
        this.idPattern = /\d+/;
    }

     
    public async SubmitForm() {
        await this.addCustomerButton.click();       
    }

    
    public async FillInCustomerData(first_name:string, last_name:string, pin_code:string) {

        let visible: boolean = await this.firstName.isDisplayed();
        assert.isTrue(visible, "First Name Textbox Not Dispalyed");

        await this.firstName.sendKeys(first_name);
        await this.lastName.sendKeys(last_name);
        await this.postCode.sendKeys(pin_code);
      
    }

     
    public async GetNewCustomerId() {
      

    }
    public async VerifyCustomerCreationMessage() {

        browser.wait(ExpectedConditions.alertIsPresent(), 2000);
        let alert = browser.switchTo().alert();
        var text = await alert.getText();
        assert.isTrue(this.pattern.test(text),"Th Expected Message is not diaplyed, but found : " + text);
        this.customerId = text.match(this.idPattern)[0];
        console.log("Customer Id is : " + this.customerId);
        await browser.sleep(1000);
        await alert.accept();        
    }
}