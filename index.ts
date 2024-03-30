#! /usr/bin/env node

import inquirer from "inquirer";

//Printing a Welcome Message
console.log("\n\tWelcome To \'Amna Khalil\' - CLI Simple Calculator\n");


//Asking Question from Users through Inquirer

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//Conditional statements If-Else

if (answer.operator === "Addition"){
    console.log( answer.firstNumber + answer.secondNumber);
}
else if(answer.operator === "Subtraction"){
  console.log(answer.firstNumber - answer.secondNumber);
  }
  else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
    }
else if(answer.operator === "Division"){
  console.log(answer.firstNumber / answer.secondNumber);
  }
  else{
    console.log("Please select valid operator");
    
  }
