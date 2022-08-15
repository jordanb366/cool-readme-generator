// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // const licenses = license;
  if (license == "None") {
   return "";
  } else if (license == "Apache License 2.0"){
   return  `![Apache 2.0](https://img.shields.io/badge/license-Apache2.0-blue)`;
  } else if (license == "GNU General Public License v3.0") {
    return  `![GNU 3.0](https://img.shields.io/badge/license-GNU3.0-blue)`;
  } else if (license == "MIT License") {
    return  `![MIT License](https://img.shields.io/badge/license-MIT-blue)`;
  }
 console.log(license);
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return "";
   } else if (license == "Apache License 2.0"){
    return  `[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)`;
   } else if (license == "GNU General Public License v3.0") {
     return  `[GNU v3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
   } else if (license == "MIT License") {
     return  `[MIT License](https://opensource.org/licenses/MIT)`;
   }
   console.log(license);
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != ""){
    return `This project is using ${license}:
  - ${renderLicenseBadge(license)}
  - ${renderLicenseLink(license)}`
   } else {
    return "";
   }
   console.log(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usuage](#usage)
  5. [License](#license)
  6. [Contributing](#contributing)
  7. [Test instructions](#test-instructions)
  8. [Questions](#questions)

  
  ## Installation
  ${data.instructions}
  
  ## Usage
  ${data.usage}
  
  ## License

  ${renderLicenseSection()}

  
  ## Contributing
  ${data.contribution}
  
  ## Test instructions
  ${data.test}
  
  ## Questions
  * Github Profile: [${data.github}](https://github.com/${data.github})
  * Send any questions to ${data.email}
`;
}

// Exports each function in the generateMarkdown.js File
module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection};




