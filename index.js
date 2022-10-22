// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const utils = require("utils") //utils folder

// TODO: Create an array of questions for user input
const questions = [
    {
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
    {
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
    {
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
    {
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
    {
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
