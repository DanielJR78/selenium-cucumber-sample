const {By, until} = require('selenium-webdriver');
const {timeout} = require('../../config');
const {expect} = require('chai');


function browser(driver){

  function locateBy(selector){
    if(selector.substr(0,2)=="//"){
      return driver.wait(until.elementLocated(By.xpath(selector)), timeout);}
    else{
      return driver.wait(until.elementLocated(By.css(selector)), timeout);}
  }

  async function checkIsPresent(selector){
    var arr;
    if(selector.substr(0,2)=="//"){
      arr = await driver.findElements(By.xpath(selector));}
    else{
      arr = await driver.findElements(By.css(selector));}        
    return (arr.length > 0);      
  }
  
  async function expectUrlStartsWith(baseUrl){
    var myUrl = await driver.getCurrentUrl(); 
    expect(myUrl).to.contain(baseUrl);    
  }

  async function expectElementContainsText(selector, searchedText){
    var selText = await this.locateBy(selector).getText();        
    expect(selText.toLowerCase()).to.contain(searchedText.toLowerCase());
  }

  return {    
    locateBy,
    checkIsPresent,
    expectUrlStartsWith,
    expectElementContainsText
  };
}

module.exports = browser;