const {Given, When, Then} = require('@cucumber/cucumber');
const {        
    performAddToCart,
    performAddToWishList,
    performBuyNow,
    performProcessOrder    
} = require('../common/action');


Given(/^I add the current item to the cart$/, performAddToCart);
When(/^I add the current item to the wishlist$/, performAddToWishList);
When(/^I buy now the current item$/, performBuyNow);
When(/^I process the current order$/, performProcessOrder);
