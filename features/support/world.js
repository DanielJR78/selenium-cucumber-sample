const seleniumdriver = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const {setWorldConstructor, setDefaultTimeout} = require('@cucumber/cucumber');
const {timeout, browser} = require('../../config');

class CustomWorld {
  constructor() {

    this.driver = new seleniumdriver.Builder().withCapabilities({
      browserName: 'chrome',
      javascriptEnabled: true,
      acceptSslCerts: true,
      //record_video : true,
      chromeOptions: {
          args: ['start-maximized']
      },
      path: chromedriver.path
    }).build();
    
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);
