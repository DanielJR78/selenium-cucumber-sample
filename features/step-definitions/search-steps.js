const {Given, When, Then} = require('@cucumber/cucumber');
const {    
    shouldHeaderContain,
    shouldHeaderNoResults,
    shouldTitlesContain,
    performOrderResultsByPriceAsc,
    shouldOrderResultsByPriceAsc,    
    performSearch,   
    navigateToResult
} = require('../common/action');

Given(/^I search for "([^"]*)"$/, performSearch);
Given(/^I open a random result$/, navigateToResult);
When(/^I sort results by price asc$/, performOrderResultsByPriceAsc);
Then(/^result header should contain "([^"]*)"$/, shouldHeaderContain);
Then(/^no results header should be shown$/, shouldHeaderNoResults);
Then(/^any result title should contain "([^"]*)"$/, shouldTitlesContain);
Then(/^any result should have a price lower than next one$/, shouldOrderResultsByPriceAsc);
//
