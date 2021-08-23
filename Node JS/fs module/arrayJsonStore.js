let fs = require("fs");
let employees = [];
let emp1 = {id:100,name:"Raju",age:21};
let emp2 = {id:101,name:"Ramesh",age:25};
let emp3 = {id:102,name:"Rajesh",age:28};
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
let employeeString = JSON.stringify(employees);
fs.writeFileSync("employees.json",employeeString);
console.log("Data stored in file")