let fs = require("fs");
fs.readFile("emp.json",(err,data)=> {
    if(!err){
        //console.log(data);
        let empString = data.toString();
        console.log(empString);
        let empJson = JSON.parse(empString);
        console.log("Id is "+empJson.id);
        console.log("Name is "+empJson.name);
        console.log("Age is "+empJson.age);
    }
})

