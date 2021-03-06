// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license === "MIT") {
    licenseBadge = `![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)`
  } else if (license === `Apache 2.0`) {
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache%2.0-blue.svg)`
  } else if (license === `GPL v3.0`) {
    licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else {
    licenseBadge = ""
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit/"
  } else if (license === "Apache 2.0") {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0"
  } else if (license === "GPL v3.0") {
    licenseLink = "https://wwww.gnu.org/licenses"
  } else {
    licenseLink = ""
  }
  return licenseLink
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = ""
  } else {
    licenseSection =
      `## License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, installation, instructions, credit, usage, license, git, email }) {
  return `# ${title} ${renderLicenseBadge(license)}
  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}
  ## installation:
  ${installation}
  ## instructions:
  ${instructions}
  ## credit:
  ${credit}
  ## usage:
  ${usage}
  ## git:
  ${git}
  ## email:
  ${email}

`;
}

module.exports = generateMarkdown;
