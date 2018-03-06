import { browser, protractor } from 'protractor';
import { Given, When, Then } from 'cucumber';
import { AddCustomerPage } from '../pages/AddCustomerPage';


const addCustomerPage: AddCustomerPage = new AddCustomerPage();


When(/^Fills In The Required Customer Data, (.*), (.*) and (.*)$/, async (firstname:string, lastname:string, pincode:string) => {
       await addCustomerPage.FillInCustomerData(firstname,lastname,pincode);
   });

When(/^Sumbit the new customer form$/, async () => {
    await addCustomerPage.SubmitForm();
});

Then(/^New Customer Gets Created Successfully$/, async () => {
    await addCustomerPage.VerifyCustomerCreationMessage();
});
