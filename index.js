// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");
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
        choices: ["Option1", "Option2", "Option3", "Option4" ],
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
            const readMeFormat = `Title: ${data.title}
            ======================
            Description
            ${data.description}
            =====================
            Table of Contents
            =====================
            Installation
            ${data.instructions}
            =====================
            Usage
            ${data.usage}
            =====================
            License
            ${data.licenses}
            =====================
            Contributing
            ${data.contribution}
            ======================
            Tests
            ${data.test}
            =====================
            Questions
            Send any questions to ${data.email}
            ===================== `

            writeToFile(filename, readMeFormat);
            
        });
   
}



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// const {writeToFile} = require("./utils/generateFile.js")
function writeToFile(filename, data) {
        // TODO: Create a file in the output folder
        console.log(data.title);
    fs.writeFile(`./output/${filename}.md`, data, (err) =>
    err ? console.log(err) : console.log('Success!')
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


