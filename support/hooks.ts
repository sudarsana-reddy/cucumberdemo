import { BeforeAll, After, Status  } from 'cucumber';
import * as fs from "fs";
import { browser } from "protractor";
//import { config } from "../config/config";

var {setDefaultTimeout} = require('cucumber');
var eachStepScreensArr = [];

setDefaultTimeout(60 * 1000);

BeforeAll({timeout: 10 * 1000}, async () => {
    // await browser.get("http:/www.google.com");
   console.log("Inside BeforeAll function");
   eachStepScreensArr = [];
});


After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png")
        // eachStepScreensArr.forEach( image => );         
    }
});