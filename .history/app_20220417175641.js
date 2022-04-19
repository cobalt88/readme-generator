const inquirer = require('inquirer');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const window = new JSDOM(`<!DOCTYPE html><p id="paragraph">Hello world</p>`);
const $ = require( "jquery" )( window );

console.log($("paragraph"))


