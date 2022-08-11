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
]



// -test instructions
// -license - choices
// -Github username
// -email address
module.exports = questions;