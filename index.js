// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { writeFile } = require("fs").promises;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description for your project.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.",
  },
  {
    type: "input",
    name: "features",
    message:
      "If your project has a lot of features, list them here.",
  },
  {
    type: "input",
    name: "contribute",
    message:
      "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((res) => {
    // console.log(res);
    const template = generateMarkdown(res);
    console.log("README Generated ✅");

    writeFile("./TestREADME.md", template, "utf8", (error) => {
      if (error) {
        console.log(error);
      }
    });
  });
}

// Function call to initialize app
init();
