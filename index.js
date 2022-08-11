// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");
const { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection} = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for this project?",
    },
    {
        type: "input",
        name: "description",
        message: "Description of this project...",
    },
    {
        type: "input",
        name: "instructions",
        message: "What are the installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this project?",
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines for this project?",
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?",
    },
    {
        type: "list",
        name: "licenses",
        message: "Which license applies?",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "None" ],
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];
// const questions = require("./utils/questions.js");
function userInput(){
    inquirer
    .prompt(questions)
    .then((data) => {
            const filename = data.title;
            
            const license = data.licenses;
            
            
            generateMarkdown(data);
            const format = generateMarkdown(data);

            
            writeToFile(filename, format);
            
            renderLicenseBadge(license);
        });
   
}



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// const {writeToFile} = require("./utils/generateFile.js")
function writeToFile(filename, data) {
        // TODO: Create a file in the output folder
    fs.writeFile(`./output/${filename}.md`, data, (err) =>
    err ? console.log(err) : console.log('Your ReadMe was created!')
);
}

// TODO: Create a function to initialize app
function init() {
    // inquirer
    // .prompt (questions)
    // .then((data) => {
    //     // writeToFile(`${data.name}`);
    //     writeToFile;
        
    // });
  userInput();
 
}
// Function call to initialize app
init();


