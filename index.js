// Required packages for application
const inquirer = require("inquirer")

// Gets the functions from the "generateMarkdown.js file"
const {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection} = require("./utils/generateMarkdown.js");
// Gets the questions array from the "Questions.js" file
const questions = require("./utils/questions.js");
// Gets the writeToFile function from the generateFile.js file
const {writeToFile} = require("./utils/generateFile.js")

// Function that runs the userInput and inquirer
function userInput(){
    // Runs inquirer
    inquirer
    // Prompts the users the questions from the "Questions array"
    .prompt(questions)
    // Gets the data from the users inputs
    .then((data) => {
        // Grabs the title and saves filename to a variable
            const filename = data.title;
        // Grabs the license selected and saves to a variable
            const license = data.licenses;
            renderLicenseBadge(license);
             renderLicenseLink(license);
             renderLicenseSection(license);
            
        // Passes data as parameter to the generateMarkdown file
            generateMarkdown(data)
            const format = generateMarkdown(data);

            
            writeToFile(filename, format);
        
        });   
}

// Intializes the app
function init() {
  userInput();
 
}
// Function call to initialize app
init();


