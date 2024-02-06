import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?:'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of your project please:'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide usage information:'
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Please provide contribution guidance:'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Please provide test instructions:'
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache License 2.0', 'GNU', 'Creative Commons']
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Please enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Please enter your GitHub email:'
    }
      
]

inquirer.prompt(questions).then((answers) => {
    // Construct the README file using the user's answers
    const readme = `# My Project
  
  ## Description
  
  ${answers.Description}
  
  ## Installation
  
  ${answers.Installation}
  
  ## Usage
  
  ${answers.Usage}
  
  ## Contributing
  
  ${answers.Contributing}
  
  ## Tests
  
  ${answers.Test}
  
  ## License
  
  [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-green.svg)](https://opensource.org/licenses/${answers.license})`;
  
    // Write the README file to disk
    fs.writeFile('README.md', readme, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file created successfully!');
      }
    });
  });
  