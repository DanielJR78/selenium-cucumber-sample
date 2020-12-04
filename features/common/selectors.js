module.exports = {
    
    //urls
    'urlHome': 'https://www.amazon.es',
    'urlCart': 'https://www.amazon.es/gp/cart/view.html?ref_=nav_cart',
    'urlSignin': 'https://www.amazon.es/ap/signin',
    'urlSearch': 'https://www.amazon.es/s?k=',

    //elements
    'homeSearchInput': '//*[@id="twotabsearchtextbox"]',
    'homeSearchResult': '.sg-col-4-of-24:nth-child(#) .s-image',        
    'homeSearchResultRandom': '//div[@id="search"]/div/div[2]/div/span[3]/div[2]/div[14]/div/span/div/div/div[2]/h2/a/span',
    'homeSearchResultTitle': '//div[@id="search"]/div/div[2]/div/span[3]/div[2]/div[#]/div/span/div/div/div[2]/h2/a/span',    
    'homeSearchResultPrice': '.sg-col-4-of-24:nth-child(#) .a-price-whole',
    'homeSearchButton': '//*[@id="nav-search-submit-text"]',
    'homeSearchHeader': '.sg-col-14-of-20 > .sg-col-inner',
    'homeSearchHeaderNoResults': '.a-size-medium:nth-child(1)',    
    'homeSearchOrderList': '.a-dropdown-prompt',
    'homeSearchOrderListPrice': '//div[4]/div/div/ul/li[2]/a',    
    'homeSearchOrderBy#': '//a[@id="s-result-sort-select_#"]',
    'homeCookiesAccept': '//*[@id="sp-cc-accept"]',
    'itemAddToCart': '//*[@id="add-to-cart-button"]',
    'itemAddToWishList' : '//*[@id="wishListMainButton-announce"]',
    'itemAddedCartLink': '//*[@id="hlb-view-cart-announce"]',
    'itemBuyNow': '//*[@id="buy-now-button"]',
    'itemBackToResults': '//*[@id=breadcrumb-back-link}',
    'cartProcessOrder': '//span[@id="sc-buy-box-ptc-button"]/span/input',
    'signinEmail': '//*[@id="app_email"]',
    'signinContinue': '//*[@id="continue"]'    
}
