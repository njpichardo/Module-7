// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
  { name: 'title', message: 'What is the title of your project?' },
  { name: 'description', message: 'Provide a description of your project:' },
  { name: 'installation', message: 'Provide installation instructions:' },
  { name: 'usage', message: 'Provide usage information:' },
  { name: 'contribution', message: 'Provide contribution guidelines:' },
  { name: 'tests', message: 'Provide test instructions:' },
  {
    name: 'license',
    type: 'list',
    message: 'Choose a license:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  { name: 'github', message: 'Enter your GitHub username:' },
  { name: 'email', message: 'Enter your email address:' },
];

// TODO: Create a function to generate the README content
const generateReadme = (data) => `
# ${data.title}
  
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
For questions, please contact me at ${data.email}.
GitHub: [${data.github}](https://github.com/${data.github})
`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`${fileName} has been successfully generated!`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateReadme(answers);
      writeToFile('README.md', readmeContent);
      console.log('README.md has been successfully generated!');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();

