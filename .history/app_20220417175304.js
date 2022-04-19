const inquirer = require('inquirer');
const $ = require('jquery');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const dom = new JSDOM(`<!DOCTYPE html><p id="paragraph">Hello world</p>`);
console.log(dom.window.$("paragraph")); // "Hello world

