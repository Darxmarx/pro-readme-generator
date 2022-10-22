// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (`${license}` === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (`${license}` === "Apache 2.0") {
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if (`${license}` !== "None") {
    link = "- [License](#license)";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let render = "";
  if (`${license}` !== "None") {
    render = "## License"
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
  ${renderLicenseLink(data.license)}

  ## Description

  ${data.description}
  
  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.usage}
  
  ## Contribution

  ${data.contribution}
  
  ## Testing

  ${data.test}

  ## Contact

  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
