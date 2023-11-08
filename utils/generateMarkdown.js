// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![](https://img.shields.io/badge/License-${data.license}-blue)

  ## Description

  ${data.description}


  ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#credits)
- [Contributing](#features)
- [Tests](#tests)
- [Contributions](#contribute)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Features

${data.features}

## How to Contribute

${data.contribute}

## Tests

${data.tests}

## License

${data.license}

## Questions

If you have any questions, please contact me with the information given below.

Github: https://github.com/${data.github}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
