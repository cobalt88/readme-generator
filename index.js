const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Include packages needed for this application

const promptUser = () => {
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
      name: 'description',
      message: 'write a brief description of your project, what purpose does it serve?',
      type: 'input'
    },
    {
      name: 'howToUse',
      message: 'How does your app work, what does it do, what are the instructions for use?'
    },
    {
      name: 'username',
      message: 'Who is the Author? (use GitHub Username)',
      type: 'input',
    },
    {
      name: 'GitHub',
      message: 'What is the GitHub Repository link?',
      type: 'input'
    },
    {
      name: 'email',
      message: 'What is the email address that can be used to contact you?',
      type: 'input',
    },
    {
      name: 'deploymentURL',
      message: 'What is your applications deployment URL?',
      type: 'input',
    },
    {
      name: 'install',
      message: 'Are there any instillation instructions? If yes please list them here',
      type: 'input',
    },
    {
      name: 'guidelines',
      message: 'Are there any contribution guidelines? If yes please list them here',
      type: 'input',
    },
    {
     name: 'tests',
     message: 'Does this project have any test conditions? If yes, please list them here',
     type: 'input',
    },
    {
      name:'technologies',
      message: 'What technologies/languages does your project use?',
      type: 'checkbox',
      choices: ['JavaScript', 'HTML', 'CSS', 'Node.JS', 'Express.JS', 'Java', 'C', 'C#', 'C++', 'Python', 'Other']
    },
    {
      name: 'license',
      message: 'What license does your project use?',
      type: 'checkbox',
      choices: ['MIT', 'Open GPL 3.0', 'Apache', 'CC-BY-SA 4.0', 'CC-BY 4.0', 'Other']
    },
    
    ])
    .then(function(answers){
      var userInput = answers;
      generateReadme(userInput);
    })

  };
 
 

  
const generateReadme = (userInput) => {
  const license = userInput.license[0];
 // gets images for the license badge at the top of the readme
  const licenseIMG = (license) => {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'Open GPL 3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'CC-BY-SA 4.0':
        return '[![License](https://img.shields.io/static/v1?label=License&message=CC-BY-SA&color=blue.svg)](https://creativecommons.org/licenses/by-sa/4.0/)';
      case 'CC-BY 4.0':
        return '[![License](https://img.shields.io/static/v1?label=License&message=CC-BY&color=blue)](https://creativecommons.org/licenses/by-sa/4.0/)'
      default:
        return '';
    }
  }

  //assigns url to license information based on user selection
  const licenseURL = (license) => {
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'Apache':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'Open GPL 3.0':
        return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'CC-BY-SA 4.0':
        return 'https://creativecommons.org/licenses/by-sa/4.0/';
      case 'CC-BY 4.0':
        return 'https://creativecommons.org/licenses/by-sa/4.0/';
      default:
        return '';
    }
  }

  //creates a basic license description with hyperlink to the full license
  const licenseDescription = (license) => {
    const licenseDescription = `## License`
    switch (license) {
      case 'MIT':
        return `${licenseDescription}
        This project is licensed under the MIT license.
        For more information about this license and what it entails visit: ${licenseURL(license)}`;
      case 'Apache':
        return `${licenseDescription}
        This project is licensed under the Apache license.
        For more information about this license and what it entails visit: ${licenseURL(license)}`;
      case 'Open GPL 3.0':
        return `${licenseDescription}
        This project is licensed under the Open GPL 3.0 license.
        For more information about this license and what it entails visit: ${licenseURL(license)}`;
      case 'CC-BY-SA 4.0':
        return `${licenseDescription}
        This project is licensed under the Creative Commons - Attribution - Share Alike license.
        For more information about this license and what it entails visit: ${licenseURL(license)}`;
      case 'CC-BY 4.0':
        return `${licenseDescription}
        This project is licensed under the Creative Commons Attribution license.
        For more information about this license and what it entails visit: ${licenseURL(license)}`;
      default:
        return '';
    };
  };

  const githubURL = (userInput) => {
    let username = userInput.username;
    return `[${username}](https://github.com/${username})`;
  }


const markdown = (userInput) => {
  const markdownData =  
  `
# ${userInput.projectName}
${licenseIMG(license)}

 ## Table of Contents

 - [Description](#description)
- [Installation](#installation)
- [Instructions/How To Use](#instructions)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Contact Information](#contact)

 ## Overall Description 

 ${userInput.description}

 ## Installation Instructions

 ${userInput.install}

 ## Instructions/How To Use

 ${userInput.howToUse}

 ## Contribution Guidelines

 ${userInput.guidelines}

 ## Application Tests

 ${userInput.tests}

${licenseDescription(license)}

 ## Contact Information

 I hope you enjoy the application, if you have any questions, comments, concerns, feedback, ect, 
please open a new issue or feel free to reach out directly at: ${userInput.email} 
Dont forget to check out some of my other projects on github: ${githubURL(userInput)}
`;

  fs.writeFile('./dist/README.md', markdownData, (err) => {
    if(err){
      console.log(err);
    } else {
      console.log('file written successfully');
    }
  });

  } 
  markdown(userInput)
}





// TODO: Create a function to write README file


// TODO: Create a function to initialize app
init = () => {
  promptUser();
}
// Function call to initialize app
init();