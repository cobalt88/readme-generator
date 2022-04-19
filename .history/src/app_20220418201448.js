const inquirer = require('inquirer');
const fs = require('fs');


//promt user for information about the repository

//promt user for title of project

//prompt for multiple titled sections, 1: description, 2: install instructions, 3: usage, 4: contribution guidelines, 5: test instructions. Based on what information is provided generate a table of contents




// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
  {
    name: 'projectName',
    message: 'What is your projects name?',
    type: 'input'
  },
  {
    name: 'Author',
    message: 'Who is the Author?',
    type: 'input',
  },
  {
    name: 'GitHub',
    message: 'What is the GitHub Repository link?',
    type: 'input'
  }
])
.then(function(answer){
  console.log(answer)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();