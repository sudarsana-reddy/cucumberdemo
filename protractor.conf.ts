import {browser} from 'protractor';
import { Reporter } from "./support/reproter";
const jsonReports = process.cwd() + "/reports/json";
const path = require('path');

exports.config = {

    disableChecks: true,
    beforeLaunch: () => {
        console.log(`\n==========================================================================`);
        console.log(process.cwd());
        console.log(`\n==========================================================================`);
    },
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [   "../features/*.feature" ],

  SELENIUM_PROMISE_MANAGER: false,

onPrepare: () => {   
    browser.manage().window().maximize();
    Reporter.createDirectory(jsonReports);
},

cucumberOpts: {
    compiler: "ts:ts-node/register",    
    format: "json:./reports/json/cucumber_report.json",
    require: [
       // path.resolve(process.cwd(), "target\\stepDefinitions\\*.js"), 
        //path.resolve(process.cwd(),"target\\support\\*.js")
       "../target/stepDefinitions/**/*.js",
       "../target/support/**/*.js"
    ],
    strict: true,
    tags: "@customercreation"
    
    
},
ignoreUncaughtExceptions: true,

onComplete: () => {
    Reporter.createHTMLReport();
},

baseUrl: "http://www.way2automation.com/angularjs-protractor/banking"
 
};