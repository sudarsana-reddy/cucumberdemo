import { element, by, browser, ExpectedConditions } from "protractor";
import { assert } from "chai";

export class CustomersPage{   
  
    
    customerRows:any;
    searchBox:any;

    constructor(){
       
        this.searchBox = element(by.model("searchCustomer"));
        this.customerRows = element.all(by.repeater("cust in Customers"));
    }

    public async SearchForCustomer(first_name: string) {
       await this.searchBox.sendKeys(first_name);
    }
    
    public async VerifyUserIsPresent(first_name: string, last_name: string, pinc_code: string) {       
       
        let row = await this.customerRows.get(0);
        console.log(row); 
        let cutomerdetails:string = await row.getText();
        console.log(cutomerdetails); 
        assert.isTrue(cutomerdetails.includes(first_name), "There is a mismatch. Expected : '" + first_name + "' To Contain in : '" + cutomerdetails + "'");
        assert.isTrue(cutomerdetails.includes(last_name), "There is a mismatch. Expected : '" + last_name + "' To Contain in : '" + cutomerdetails + "'");
        assert.isTrue(cutomerdetails.includes(pinc_code), "There is a mismatch. Expected : '" + pinc_code + "' To Contain in : '" + cutomerdetails + "'");
        await browser.sleep(1000);
    }
}