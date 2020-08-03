// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Descriptions
  
  ## Table of Contents
  `
  ;
}

module.exports = generateMarkdown;

// # ${data.title}
