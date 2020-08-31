const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")

const writeFile = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? "
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Please indicate any Installation instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Provide any additional usage instructions: "
    },
    {
        type: "checkbox",
        name: "license",
        message: "Which license badge would you like to include?",
        choices: ["MIT", "Apache", "GNU", "Creative Commons", "Mozilla", "Unlicense"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list any contributors and their contributions for your project: "
    },
    {
        type: "input",
        name: "tests",
        message: "Please list any tests you would like included: "
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address to include on your README page: "
    }
];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        console.log(data.title);
        console.log(data.license[0]);
        const markdown = generateMarkdown(data)
        fs.writeFile("README.md", markdown, (err) => {if (err)  throw err})
    })
}

// function call to initialize program
init();
