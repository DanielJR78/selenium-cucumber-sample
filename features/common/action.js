const helper = require('../common/browser');
const selectors = require('../common/selectors');
const {expect} = require('chai');

const action = {

  navigateToHome: function() { return this.driver.get(selectors['urlHome']);
  },
  navigateToResult: async function() { await helper(this.driver).locateBy(selectors['homeSearchResultRandom']).click();
  },
  navigateToCart: async function() { await helper(this.driver).locateBy(selectors['itemAddedCartLink']).click();
  },  
  navigateToSignin: function() { return this.driver.get(selectors['urlSignin']);
  },
  performSearch: async function(text) { 
    helper(this.driver).locateBy(selectors['homeSearchInput']).sendKeys(text);    
    await helper(this.driver).locateBy(selectors['homeSearchButton']).click();
  },  
  performAcceptCookies: async function() {     
    if(await helper(this.driver).checkIsPresent(selectors['homeCookiesAccept']))
      await helper(this.driver).locateBy(selectors['homeCookiesAccept']).click();    
  },
  performAddToCart: async function() { await helper(this.driver).locateBy(selectors['itemAddToCart']).click();
  },
  performAddToWishList: async function() { await helper(this.driver).locateBy(selectors['itemAddToWishList']).click();
  },
  performBuyNow: async function() { await helper(this.driver).locateBy(selectors['itemBuyNow']).click();
  },
  performProcessOrder: async function() { await helper(this.driver).locateBy(selectors['cartProcessOrder']).click();  
  },
  shouldRedirectSignin: async function() { await helper(this.driver).expectUrlStartsWith(selectors['urlSignin']);    
  },
  shouldRedirectResults: async function() { await helper(this.driver).expectUrlStartsWith(selectors['urlSearch']);
  },
  shouldHeaderNoResults: async function() { await helper(this.driver).locateBy(selectors['homeSearchHeaderNoResults']);
  },  
  shouldHeaderContain: async function(text) { await helper(this.driver).expectElementContainsText(selectors['homeSearchHeader'], text);
  },
  shouldTitlesContain: async function(text) {         
    for (var i = 10; i <= 15; i++) {        
      var locatorNum = selectors['homeSearchResultTitle'].replace('#', i)      
      await helper(this.driver).expectElementContainsText(locatorNum, text);    }        
  },
  performOrderResultsByPriceAsc: async function() {     
    await helper(this.driver).locateBy(selectors['homeSearchOrderList']).click();    
    await helper(this.driver).locateBy(selectors['homeSearchOrderListPrice']).click();    
  },
  shouldOrderResultsByPriceAsc: async function() {                 
    var locatorPrice = selectors['homeSearchResultPrice'].replace('#', 9)        
    var pricePrev = await helper(this.driver).locateBy(locatorPrice)
    var priceNext = 0;    
    for (var i = 10; i <= 14; i++) {                        
        var locatorPrice = selectors['homeSearchResultPrice'].replace('#', i)        
        priceNext = await helper(this.driver).locateBy(locatorPrice);
        expect(pricePrev<=priceNext).to.equal(true);        
        pricePrev = priceNext;    }             
  }
  
};

module.exports = action;
