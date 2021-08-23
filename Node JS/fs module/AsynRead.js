let fs = require("fs");
fs.readFile("demo1.txt",(err,data)=> {
    if(!err){
        //console.log(data);      // it read from file and display in bufffer format
        console.log(data.toString())    // convert buffer to string format. 
    }
})
console.log("Normal Statement1");
console.log("Normal Statement2");