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
    name: 'welcome',
    message: "Welcome to Cobalt's Readme Generator! The following prompts will ask you for some basic information about your project that will be used to automatically generate a readme for your project. If the prompt asks for information that is not relevant for your project then just leave it blank and that section will be filtered out. Would you like to continue?",
    type: 'confirm',
  },
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
  },
  {
    name: 'deploymentURL',
    message: 'Does your application have a deployment URL? (if no then leave blank',
    type: 'input',
  },
  {
    name: 'install',
    message: 'Are there any instillation instructions?',
    type: 'input',
  },
  {
    name: 'guidelines',
    message: 'Are there any contribution guidelines?',
    type: 'input',
  },
  {
   name: 'test',
   message: 'Does this project have any test conditions?' 
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