// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return `
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
    `;
  } else if (license === "GNU GPLv3") {
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]
    `;
  } else if (license === "BSD 3-Clause License") {
    return `
    [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]
    `;
  } else if (license === "MIT License") {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
    `;
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return `
This application is covered by the Apache v2.0 License, the terms of which can be found [here](https://www.apache.org/licenses/LICENSE-2.0.txt).
    `;
  } else if (license === "GNU GPLv3") {
    return `
This application is covered by the GNU General Purpose License, the terms of which can be found [here](https://www.gnu.org/licenses/gpl-3.0.en.html).
    `;
  } else if (license === "BSD 3-Clause License") {
    return `
This application is covered by the BSD 3-Clause License, the terms of which can be found [here](https://opensource.org/licenses/BSD-3-Clause).
    `;
  } else if (license === "MIT License") {
    return `
This application is covered by the MIT License, the terms of which can be found [here](https://opensource.org/licenses/MIT).
    `;
  } else {
    return ""
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  ## License
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions?
  ### Reach me here: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}
`;
}

module.exports = generateMarkdown;