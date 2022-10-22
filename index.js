// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js") //utils folder

// TODO: Create an array of questions for user input
const questions = [
    { // project title
        type: "input",
        name: "title",
        message: "What is your project's title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a title to continue.");
                return false;
            }
        }
    },
    { //project description
        type: "input",
        name: "description",
        message: "Please provide a description for your project.",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("You must enter a valid description.");
                return false;
            }
        }
    },
    { //project installation
        type: "input",
        name: "installation",
        message: "What must be done to install your project?",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please provide installation details.");
                return false;
            }
        }
    },
    { // project usage
        type: "input",
        name: "usage",
        message: "What is the usage of this project?",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please describe how this project is used.");
                return false;
            }
        }
    },
    { //project contribution
        type: "input",
        name: "contribution",
        message: "How can other users contribute to this project?",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log("Please describe how users may contribute to your project.");
                return false;
            }
        }
    },
    { //project testing
        type: "input",
        name: "test",
        message: "How do you test this project?",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please describe how to test this project.");
                return false;
            }
        }
    },
    { //project license
        type: "checkbox",
        name: "license",
        message: "Please choose which license your project used.",
        choices: ["Apache", "MIT", "None"],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log("Please select a license.");
                return false;
            }
        }
    },
    { // project owner github
        type: "input",
        name: "github",
        message: "Please enter your GitHub username.",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("You must input a valid GitHub username.");
                return false;
            }
        }
    },
    { // project owner email
        type: "input",
        name: "email",
        message: "Optional: Please enter your email.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("Your README was successfully generated.")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(userInput) {
            console.log(userInput);
            writeToFile("generated-README.md", generateMarkdown(userInput));
        });
}

// Function call to initialize app
init();
