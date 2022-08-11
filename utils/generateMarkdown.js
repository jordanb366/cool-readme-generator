// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // const licenses = license;
  if (license == "None") {
    console.log("this worked");
  } else {
    console.log(license);
  }

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  ## Installation
  ${data.instructions}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseBadge()}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  Send any questions to ${data.email}
`;
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection};
