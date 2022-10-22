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
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description for your project.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
