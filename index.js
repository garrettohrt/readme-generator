// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
function userInput() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?",
            default: "npm i"
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "input",
            name: "contribution",
            message: "What does the user need to know about contributing to the repo?"
        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?",
            default: "npm test"
        },
        {
            type: "list",
            name: "license",
            message: "Please select a license:",
            choices: ["Apache License 2.0", "GNU GPLv3", "BSD 3-Clause License", "MIT License", "None"]
        },
        {
            type: "input",
            name: "username",
            message: "What is your Gihub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "fileName",
            message: "What do you want to call this readme?",
        }]

    )
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data,
        (err) =>
            err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName), (generateMarkdown(answers)));
}


// Function call to initialize app
init();
