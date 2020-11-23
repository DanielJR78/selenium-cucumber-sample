var {Before, After, AfterAll} = require('@cucumber/cucumber');
var reporter = require('cucumber-html-reporter');
var cucumberJunit = require('cucumber-junit');
var fs = require('fs-plus');
var path = require('path');

Before(function() {
  return this.driver.manage().window().maximize();
});

After(function() {
  return this.driver.quit();
});

AfterAll(function() {
  var globalReportPath = './reports'
  var cucumberReportPath = path.resolve(globalReportPath, 'cucumber-report.json');

  if (fs.existsSync(globalReportPath)) {
    
    console.log("Existing path " + globalReportPath);
    // generate the HTML Cucumber report
    var reportOptions = {
      theme: 'bootstrap',
      jsonFile: cucumberReportPath,
      output: path.resolve(globalReportPath, 'cucumber-report.html'),
      reportSuiteAsScenarios: true,
      launchReport: true,
      ignoreBadJsonFile: true     
    };
    reporter.generate(reportOptions);
    console.log("CReport generate launched");

    // generate XML JUnit report
    var reportRaw = fs.readFileSync(cucumberReportPath).toString().trim();
    var xmlReport = cucumberJunit(reportRaw);
    var junitOutputPath = path.resolve(globalReportPath, 'junit-report.xml');
    fs.writeFileSync(junitOutputPath, xmlReport);
    console.log("JReport generate launched");
  }
  else {
    console.log("Unexisting path " + globalReportPath);
  };  
});

var hooks = function() {
  this.registerHandler('AfterFeatures', function (event, callback) {
  callback();
  });
};
module.exports = hooks;
