import { browser, protractor } from 'protractor';
import { Given, When, Then } from 'cucumber';
import { ManagerHomePage } from '../pages/ManagerHomePage';


const managerHomePage: ManagerHomePage = new ManagerHomePage();


Then(/^User should be login to Manager Home Page$/, async () => {
        await managerHomePage.VerifyManagerLogin();
    });

Given(/^Manager Initiates a New Customer Creation$/, async () => {
       await managerHomePage.InitiateNewCustomerCreation();
   });

   When(/^Manager Gets The Current Customers$/, async () => {
        await managerHomePage.GetCustomers();
   });


   