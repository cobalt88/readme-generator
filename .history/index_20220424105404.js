const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Include packages needed for this application

const promptUser = () => {
  
    var data = 
    inquirer.prompt([
    {
      name: 'welcome',
      message: "Welcome to Cobalt's Readme Generator! The following prompts will ask you for some basic information about your project that will be used to automatically generate a readme for your project. If the prompt asks for information that is not relevant for your project then just leave it blank and that section will be filtered out. Would you like to continue?",
      type: 'confirm',
    },
    {
      name: 'title',
      message: 'What is your projects name?',
      type: 'input'
    },
    {
      name: 'description',
      message: 'Provide a description of your project',
      type: 'input'
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
      message: 'what is an email that you can be reached at?',
      type: 'input'
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
     name: 'test',
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
    .then(function(data){
      markdown(data);
    })
    
     

  };
 
 

  



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
  const licenseDescription = `## ${license}`
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

const githubURL = (data) => {
  let username = data.username;
  return `[${username}](https://github.com/${username})`;
}

const markdown = (data) => {
  console.log(data);
  const markdownData =  `
# ${data.title}
${licenseIMG(data.license)}

## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
## Overall Description 

${data.description}

## Installation Instructions

${data.installation}

## Usage Guidelines/License

${data.usage}

${licenseDescription(data.license)}

## Contribution Guidelines

${data.contributing}

## Tests

${data.tests}

## Additional Information

Feel free to reach out to me at ${data.email} 
or visit my GitHub profile at ${githubURL(data.username)}
`;
writeToFile(markdownData);
}



 const writeToFile = (markdownData) => {
  console.log('made it to write file')
  console.log(markdownData)
    fs.writeFile('./dist/README.md', markdownData);
 }

const init = () => {
  promptUser();
}

init();