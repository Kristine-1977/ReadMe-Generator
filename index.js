// array of questions for user
var inquirer = require('inquirer');
var fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of the project",
    },
    {
        type: 'input',
        name: 'project-description',
        message: 'What is the description of the project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would you install the project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you use the project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'choices',
        choices: ['MIT', 'GMU', 'GPL', 'CC-BY',],
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What tests are available',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How does someone contribute to the project',
    },
];

// function to write README file
function writeToFile(data) {
    fs.writeFile('readmefile.md', generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (answers) {
        console.log(answers);
        writeToFile(answers)
    })
}

// function call to initialize program
init();