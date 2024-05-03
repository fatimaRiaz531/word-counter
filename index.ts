//  importing inquirer and chalk packages

import inquirer from "inquirer";
import chalk from "chalk";

//  display a colourfull welcom message
console.log("=".repeat(60));
console.log(chalk.bold.green("\n \t\t Code With Fatima - Word Counter"));
console.log("=".repeat(60));

//  promt the user to enter a sentences
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);

//  trimming the sentence and splitting it into words based on " spaces"

let words = answers.sentence.trim().split(" ");

//  analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(60));

