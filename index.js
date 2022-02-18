// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How will the user access this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the best use for this application?'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Choose the best license associated with your project',
        choices: ['MIT', 'GPL 3.0', 'Apache', 'BSD', 'N/A']
    },
    {
        type: 'inupt',
        name: 'test',
        message: 'Please enter tests to use for your project'
    },
    {
        type: 'input',
        name: 'question',
        message: 'Please provide your email for questions',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide your email!')
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your github account'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', generateMarkdown({ ...answers }))
        })
}

// Function call to initialize app
init();
