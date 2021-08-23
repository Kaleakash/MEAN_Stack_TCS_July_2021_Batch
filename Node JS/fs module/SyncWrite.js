const { constants } = require("buffer");
let fs = require("fs");
let msg = "Welcome to file handling with synchronous operation\n";
//fs.writeFileSync("demo2.txt",msg)     // override 
fs.writeFileSync("demo2.txt",msg,{flag:"a+"});    // append 
//console.log(res); 
console.log("Data Stored");
console.log("Normal Statement1");
console.log("Normal Statement2");