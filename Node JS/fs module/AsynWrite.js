// load the fs module 
let fs = require("fs");
var msg = "Hi\n";
// by default old data get override
// fs.writeFile("demo1.txt",msg,(err)=> {
//     if(!err){
//         console.log("Data stored in file successfully")
//     }
// })
// append the data 
fs.writeFile("demo1.txt",msg,{flag:"a+"},(err)=> {
    if(!err){
        console.log("Data stored in file successfully")
    }
});
console.log("Normal Statement1");
console.log("Normal Statement2");