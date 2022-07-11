const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const questions = [
    {
        type: "input",
        message: "What is the name of your application?",
        name: "title",
        validate: (value) => { if (value) { return true } else { return "Value is needed to continue" } },
    },
    {
        type: "input",
        message: "How to install your application?",
        name: "installation",
        validate: (value) => { if (value) { return true } else { return "Value is needed to continue" } },
    },
    {
        type: "input",
        message: "What is the set of instructions to be followed?",
        name: "instructions",
        validate: (value) => { if (value) { return true } else { return "Value is needed to continue" } },
    },
    {
        type: "input",
        message: "Credit ",
        name: "credit",
        validate: (value) => { if (value) { return true } else { return "Value is needed to continue" } },
    },
    {
        type: "input",
        message: "how to use your application?",
        name: "usage",
        validate: (value) => { if (value) { return true } else { return "Value is needed to continue" } },
    },
    {
        type: "list",
        message: "What license were used to create your application? ",
        name: "license",
        choices: ["The MIT license", "The GPL License", "Apache License", "GNU License", "N/A"],
        validate: (value) => { if (value) { return true } else { return "Value is needed to continue" } },
    },
    {
        type: "input",
        message: "Github Username",
        name: "git",
        validate: (value) => { if (value) { return true } else { return "Value is needed to continue" } },
    },
    {
        type: "input",
        message: "Email",
        name: "email",
        validate: (value) => { if (value) { return true } else { return "Value is needed to continue" } },
    },
]


const init = async () => {

    const answers = await inquirer.prompt(questions)
    writeToFile(answers)
}


const writeToFile = fileContent => {
    console.log(fileContent);

let template = generateMarkdown(fileContent)

    fs.writeFile(`generateREADME.md`, template, err => {
        if (err) {
            console.log(err);
            return;
        }
    });
};

init()





















// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
