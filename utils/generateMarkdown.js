// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "Apache") {
    badge = "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  }
  if (license === "MIT") {
    badge = "![GitHub license](https://img.shields.io/badge/License-MIT-green.svg)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if (license === "Apache") {
    link = "https://choosealicense.com/licenses/apache-2.0/";
  }
  if (license === "MIT"){
    link = "https://choosealicense.com/licenses/mit/";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
