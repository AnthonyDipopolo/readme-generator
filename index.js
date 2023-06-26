// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const callBack = (err) => {
    if (err) throw err;
};

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
      // Update the badge URL and alt text
      const badgeURL = `https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg`;
      const badgeAltText = `${license} License`;
      return `![${badgeAltText}](${badgeURL})`;
    }
    return '';
  }


// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        name: 'projectName',
        message: 'Enter Your Project Name'
    },
    {
        name: 'description',
        message: 'Input a description about your project'
    },
    {
        name: 'installation',
        message: 'Input your Installation Instructions'
    },
    {
        name: 'usage',
        message: "Input your Usage Information",
    },
    {
        name: 'contributions',
        message: "Input your Contribution Guidelines",  
    },
    {
        name: 'tests',
        message: "Input your Test Instructions",
    },
    {
        name: 'userName',
        message: "Input your GitHub User Name",

    },
    {
        name: 'questions',
        message: "Input your GitHub UserName Link",
    },
    {
        name: 'email',
        message: "Input your Email Address",
    },
    {
        name: 'license',
        message: "Select your desired license",
        type: 'list',
        choices: [ 'None',
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense',]
    }


]).then(({projectName, description, installation, usage, contributions, tests, questions, userName, email, license }) => {
    const licenseBadge = renderLicenseBadge(license);
    const content = `
# ${projectName}

${licenseBadge}

## Description\n ${description}

## Table Of Contents\n 
- [Description](#description)\n 
- [Installation](#installation)\n
- [Usage](#usage)\n
- [License](#license)\n
- [Contributions](#contributions)\n
- [Tests](#tests)\n
- [Questions](#questions)\n


## Installation\n ${installation}

## Usage\n ${usage}

## License\n ${license}

## Contributions\n ${contributions}

## Tests\n ${tests}

## Questions\n - GitHub Username: [${userName}](${questions})\n
- Reach out with any additional questions to my email: ${email}
    `;

    fs.writeFile('./README.md', content, callBack);
});
