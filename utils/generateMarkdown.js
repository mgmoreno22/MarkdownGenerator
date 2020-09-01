// function to generate markdown for README
function generateMarkdown(data) {
  // const badge = `${data.license[0]}`

  return `# ${data.title}
  ![License](https://img.shields.io/badge/LICENSE-${data.license[0]}-GREEN)
  ## Table of Contents
  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license[0]}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  For any further questions, you may contact me at the following:
  \ngithub: http://github.com/${data.github}
  \nemail: ${data.email}
  `;
}

module.exports = generateMarkdown;
