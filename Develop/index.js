// require inquirer 
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide examples and instructions for use:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license:',
        choices: ['MIT', 'Apache', 'ISC', 'GNU AGPLv3', 'GNU GPLv3', 'Mozilla Public License', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests and give examples on how to use them:'
    }

])
.then(answers => console.log(answers));
}

// function to write README file
function writeToFile(fileName, data) {
 fs.writeFile('generatedREADME.md', generateMarkdown(), err => {
     if (err) throw err
 })
}

questions() 
.then(writeToFile);

// function to initialize program
function init() {

}

// function call to initialize program
init();
