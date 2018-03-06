import { browser, protractor } from 'protractor';
import { Given, When, Then } from 'cucumber';
import { HomePage } from '../pages/HomePage';

const homePage: HomePage = new HomePage();


Given(/^user is on Bank Home Page$/, async () => {
    await browser.get(browser.baseUrl);
});

  When(/^User Selects Manager Login$/, async () => {
        //await login.Login(username, password);
        await homePage.LoginAsManager();
    });