// Questions array for users to answer
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
        name: "license",
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

// Exports the questions array
module.exports = questions;