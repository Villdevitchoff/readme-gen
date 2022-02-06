// TODO: Create a function that returns a license badge based on which license is passed in
const { NONAME } = require('dns')

// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;

  switch(license) {
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
  const badge = renderLicenseBadge(data.license)

  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
