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
function renderLicenseSection(license) {
  let render = "";
  if (license === "None") {
    render = "";
  } else {
    render = `License ${license}`
  }
  return render;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact](#contact)
  - [License](#license)

  ## Description:
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contribution:
  ${data.contribution}
  
  ## Testing:
  ${data.test}

  ## Contact
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

  ## ${renderLicenseSection(data.license)} 
  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
