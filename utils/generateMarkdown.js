// function to generate markdown for README
function generateMarkdown(data) {
  // const badge = `${data.license[0]}`

  return `# ${data.title}
  ![License](https://img.shields.io/badge/LICENSE-${data.license}-GREEN)
  ${data.description}
  ### Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [Questions](#questions)
  ### Installation
  ${data.installation}
  ### Usage
  ${data.usage}
  ### License
  ${data.license[0]}
  ### Contributing
  ${data.contributing}
  ### Tests
  ${data.tests}
  ### Questions
  For any further questions, you may contact me at the following:\n github: http://github.com/${data.github}\nemail: ${data.email}
  `;
}

module.exports = generateMarkdown;
