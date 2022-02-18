// TODO: Create a function that returns a license badge based on which license is passed in
const { NONAME } = require("dns")

// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;

  switch (license) {
    case 'MIT':
      badge = 'https://img.shields.io/badge/License-MIT-brightgreen';
      break;
    case 'GPL 3.0':
      badge = 'https://img.shields.io/badge/License-GPL%203.0-blue';
      break;
    case 'Apache':
      badge = 'https://img.shields.io/badge/License-Apache-orange';
      break;
    case 'BSD':
      badge = 'https://img.shields.io/badge/License-BSD-yellow';
      break;
    case 'N/A':
      badge = ""

  }
  return badge;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.licenses)

  return `#
${badge}

# title:
${data.title} 

## Description
${data.description}

## Table of contents
1.[Installation](#installation)
2.[Usage](#usage)
3.[Tests](#tests)
4.[Contribution](#contribution)
5.[License](#License)
6.[Questions](#questions)

# Installation 
${data.installation}

## Usage:
${data.usage}

## Tests:
${data.test}

## Contribution:
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change

Please  make sure to update tests as appropriate.

## License:
${data.licenses}
${badge}

## Questions:
Please direct any questions to <a href=mailto:${data.question}>Email: ${data.question}</a

Please view my GitHUb account for further documentation ${data.github}


`;
}

module.exports = generateMarkdown;
