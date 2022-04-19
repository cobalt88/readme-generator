const inquirer = require('inquirer');
const $ = require('jquery');
const dom = new JSDOM(``, {
  url: "https://example.org/",
  referrer: "https://example.com/",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000
});

function test1 (){
  console.log();

  test2()
}

function test2 (){
  console.log('world');
}

test1();