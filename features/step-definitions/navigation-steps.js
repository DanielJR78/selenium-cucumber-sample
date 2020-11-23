const {Given, When, Then} = require('@cucumber/cucumber');
const {
    navigateToHome,    
    navigateToCart,        
    performAcceptCookies, 
    shouldRedirectResults,   
    shouldRedirectSignin
} = require('../common/action');

Given(/^I go to Amazon home$/, navigateToHome);
Given(/^I accept cookies policies$/, performAcceptCookies);
When(/^I open the cart page$/, navigateToCart);
Then(/^I should be redirected to the Results page$/, shouldRedirectResults);
Then(/^I should be redirected to the Signin page$/, shouldRedirectSignin);
