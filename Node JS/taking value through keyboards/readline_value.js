let obj = require("readline");
var r1 = obj.createInterface({
    input:process.stdin,        // standard input device keyboards 
    output:process.stdout       // standard output device console 
});
r1.question("Enter name",(name)=> {
    console.log("Your name is "+name);
    //r1.close();
})

// r1.question("Enter id",(id)=> {
//     console.log("Your id is "+id);
//     r1.close();
// })