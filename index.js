#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Printing a Welcome Message
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<================================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>>  ${chalk.redBright.bold('Welcome To \"SAM\" - CLI Simple Calculator')}  <<<=========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<===============================================>>>\n`));
// Function to run the calculator
async function main() {
    let runCalculator = true;
    while (runCalculator) {
        // Asking Questions from Users through Inquirer
        const answer = await inquirer.prompt([
            { message: (chalk.blueBright.bold("Enter first number:")), type: "number", name: "firstNumber", validate: input => !isNaN(input) || chalk.red("Please enter a valid number") },
            { message: (chalk.blueBright.bold("Enter second number:")), type: "number", name: "secondNumber", validate: input => !isNaN(input) || chalk.red("Please enter a valid number") },
            {
                message: (chalk.yellowBright.bold.italic("Select one of the operators to perform operation:")),
                type: "list",
                name: "operator",
                choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exit"],
            },
        ]);
        //Check if the user wants to exit
        if (answer.operator === "Exit") {
            console.log(chalk.magentaBright("Exiting the calculator. Thank you for using it!"));
            return; // Exit the function
        }
        //Conditional statements If-Else
        if (answer.operator === "Addition") {
            console.log(chalk.green(answer.firstNumber + answer.secondNumber));
        }
        else if (answer.operator === "Subtraction") {
            console.log(chalk.green(answer.firstNumber - answer.secondNumber));
        }
        else if (answer.operator === "Multiplication") {
            console.log(chalk.green(answer.firstNumber * answer.secondNumber));
        }
        else if (answer.operator === "Division") {
            console.log(chalk.green(answer.firstNumber / answer.secondNumber));
        }
        else {
            console.log(chalk.redBright("Please select valid operator"));
        }
        ////
        const { confirm } = await inquirer.prompt({
            type: "confirm",
            name: "confirm",
            message: chalk.magentaBright("Do you want to perform another calculation?"),
            default: false,
        });
        runCalculator = confirm;
    }
    console.log(chalk.yellow("__________________________________________________________________________"));
    console.log(chalk.greenBright("\n\tThank you for using the SAM Calculator!\t"));
}
main();
