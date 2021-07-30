const inquirer = require('inquirer')
const fs = require('fs');

inquirer
.prompt([
    {
      type: 'input',
      message: 'What is the title of the README.md?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Detail your Project',
      name: 'Description',
    },
    {
        type: 'input:expand',
        message: 'What packages did you use in the project?',
        name: 'Installations',
    },
    {
        type: 'input',
        message: 'Enter Email.',
        name: 'Email',
    },
    {
      type: 'input',
      message: 'Enter Github URL',
      name: 'Github',
    }
  ])
  .then((answers) => {
    console.log(answers);

    const filename = `${answers.Title.toLowerCase().trim().split('').join('')}.md`;
    const Readthis = 
    `# ${answers.Title}

## ${answers.Description}

---
This project is designed to offer a README template that the user is able to generate their own answers into based on the project they are currently working on. It includes a title, description section, table of contents, installation requirements, usages, license options with a focus on MIT for the provided example. It also includes a section for Contributing,Testing and Questions. 

---

## Table of Contents

Click on below sections to move specifically to that README section.

1. [Installation]()
2. [Usage]()
3. [License]()
4. [Tests]()
5. [Questions]()


## Installation
${answers.Installations}

## Usage
Example Code:
---
$ node index.js
? What is the title of the README.md? Best README ever!
? Detail your Project README GENERATOR!
? Fill out Table of Contents 1 2 3 3 4 5 6
? What packages did you use in the project? inquire, fs, js
? What is an example of how your project can utilized? See Image
? What licenses were used? MIT
? Instructions on how to contribute. Fork, Create Branch, Commit Changes, Push to Branch, Create Pull Request
? What tests have been run? None
? Enter Email and Github URL. mr.carmody89@gmail.com Michael327-cmh
{
  Title: 'Best README ever!',
  Description: 'README GENERATOR!',
  TOC: '1 2 3 3 4 5 6',
  Installations: 'inquire, fs, js',
  Usage: 'See Image',
  Licenses: 'MIT',
  Contributing: 'Fork, Create Branch, Commit Changes, Push to Branch, Create Pull Request',
  Testing: 'None',
  Questions: 'mr.carmody89@gmail.com Michael327-cmh'
}
Writing to a JSON document...

---

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Tests
See below video for walk thru

## Contributing
1. Fork Repository
2. Create a feature branch
3. Commit your changes to the feature branch
4. Push to the branch
5. Create a new Pull Request

## Questions
- Email: ${answers.Email}
- Github URL: ${answers.Github}
`
    fs.writeFile(filename, Readthis, (err) => {
        err ? console.error (err) : console.log("Writing to an md document...")
    })
})
  .catch((error) => {
      if (error.isTtyError) {

      } else {

      }
  });
