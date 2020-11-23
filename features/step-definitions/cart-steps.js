const {Given, When, Then} = require('@cucumber/cucumber');
const {    
    performSearch,   
    navigateToResult, 
    performAddToCart,
    performAddToWishList,
    performBuyNow,
    performProcessOrder    
} = require('../common/action');

Given(/^I search for "([^"]*)"$/, performSearch);
Given(/^I add the current item to the cart$/, performAddToCart);
When(/^I add the current item to the wishlist$/, performAddToWishList);
Given(/^I open a random result$/, navigateToResult);
When(/^I buy now the current item$/, performBuyNow);
When(/^I process the current order$/, performProcessOrder);
