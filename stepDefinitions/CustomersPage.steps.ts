import { browser, protractor } from 'protractor';
import { Given, When, Then } from 'cucumber';
import { CustomersPage } from '../pages/CustomersPage';


const customersPage: CustomersPage = new CustomersPage();

When(/^Search For Customer with (.*)$/, async (firstname:string) => {
    await customersPage.SearchForCustomer(firstname);
});

Then(/^The News Customer should Present in the List with (.*), (.*) and (.*)$/, async (firstname:string, lastname:string, pincode:string) => {
       await customersPage.VerifyUserIsPresent(firstname,lastname,pincode);
   });


