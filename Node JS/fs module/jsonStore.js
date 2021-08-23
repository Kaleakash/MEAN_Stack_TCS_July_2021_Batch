let fs = require("fs");
let emp = {id:100,name:"ajay",age:26};
let empString = JSON.stringify(emp);    // converting object to string 
fs.writeFile("emp.json",empString,(err)=> {
    if(!err){
        console.log("Data store in file");
    }
})