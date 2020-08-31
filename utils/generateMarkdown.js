// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  ### Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
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
  For any further questions, you may contact me at github.com/${data.github} or email me at ${data.email}
  `;
}

module.exports = generateMarkdown;
