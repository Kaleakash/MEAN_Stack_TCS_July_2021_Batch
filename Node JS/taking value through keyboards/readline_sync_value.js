let readline= require("readline-sync");
let id = readline.questionInt("Enter the id")
let name = readline.question("Enter the name");
let salary = readline.questionFloat("Enter the salary")
let emailId = readline.questionEMail("Enter your email id")
console.log("Your id is "+id);
console.log("Your name is "+name);
console.log("Your salary is "+salary);
console.log("Your email id is "+emailId);