// Calls the FS so we can write to file
const fs = require("fs");

// Write to file function
function writeToFile(filename, data) {
    // Creates a file in the output folder
fs.writeFile(`./output/${filename}.md`, data, (err) =>
err ? console.log(err) : console.log('Your ReadMe was created!')
);
}

module.exports = {writeToFile};

