// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Description
${data.description}
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Test](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Tests
${data.tests}

## Questions
Please feel free to contact me with any questions
[My Github Profile](https://github.com/${data.github})
[My Email](mailto:${data.email})
`
  ;
}

module.exports = generateMarkdown;
