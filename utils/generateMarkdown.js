// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'APACHE 2.0':
      return `![License](https://img.shields.io/badge/license-APACHE_2.0-purple.svg)`;
    case 'BSD 3':
      return `![License](https://img.shields.io/badge/license-BSD_3-orange.svg)`;
    case 'GNU GPL':
      return `![License](https://img.shields.io/badge/license-GNU_GPL-yellow.svg)`;
    case 'MIT':
      return `![License](https://img.shields.io/badge/license-MIT-blue.svg)`;
    case 'None':
      return '';
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'APACHE 2.0':
      return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
    case 'BSD 3':
      return `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'GNU GPL':
      return `[GNU GPL](https://www.gnu.org/licenses/licenses.en.html#GPL)`;
    case 'MIT':
      return `[MIT](https://opensource.org/licenses/MIT)`;
    case 'None':
      return '';
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.licensing === 'None') {
    return ''
  }
  return `${license.title} is protected and licensed under the ${renderLicenseLink(license.licensing)} license.`;
}

function generateMarkdown(data) {
  var markdown = `# ${data.title}
    ## Table of Contents
    * [Licensing](#licensing)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Test](#test)
    * [Questions](#questions)
    ## Licensing 
    ${renderLicenseBadge(data.licensing)}
    > ${renderLicenseSection(data)}
    ## Description
    ${data.description}
      
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contribution
    ${data.usage}
    ## Test
    > ${data.test}
    ## Question
    Please reach out if there are any questions or issues at ${data.email}
    You can find me on GitHub at https://github.com/${data.username}/.
    `;
  return markdown;
}

module.exports = generateMarkdown;
