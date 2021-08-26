// load the module 
let express = require("express");
let bodyParser = require("body-parser");

//create the reference 
let app = express();

//app.use(bodyParser.urlencoded({extended:true}));    // passing the value through form post method 
app.use(bodyParser.json());                             // enable json data from request body part 
let emp  = {id:100,name:"Raj",age:21};
let employees = [
        {id:100,name:"Raj",age:21},
        {id:101,name:"Raju",age:22},
        {id:102,name:"Ramesh",age:23},
        {id:103,name:"Rajesh",age:24}        
]
// http://localhost:9090/sayPlainText
app.get("/sayPlainText",(request,response)=> {
    response.send("Welcome to REST API in plain text format");
});
//  http://localhost:9090/sayJson
app.get("/sayJson",(request,response)=> {
    response.json({"msg":"Welcome to REST API in Json Format"});
    //response.json({"msg":emp.name});
})
// http://localhost:9090/empInfo
app.get("/empInfo",(request,response)=> {
    response.json(emp);         // automatically convert js object to json format. 
})
// http://localhost:9090/employeesInfo
app.get("/employeesInfo",(request,response)=> {
    response.json(employees);         // automatically convert js object to json format. 
})

// query param with single value 
// http://localhost:9090/singleQueryParam?name=Raj
app.get("/singleQueryParam",(request,response)=> {
            let name = request.query.name;
            response.send("Welcome user with query param "+name);
})

// query param with single value 
// http://localhost:9090/multipleQueryParam?name=Raj&age=21
app.get("/multipleQueryParam",(request,response)=> {
    let name = request.query.name;
    let age = request.query.age;
    response.send("Welcome user with query param "+name+" Your age is "+age);
})

// path param with single value 
// http://localhost:9090/singlePathParam/Raj
app.get("/singlePathParam/:name",(request,response)=> {
    let user = request.params.name;
    response.send("Welcome user path param"+user);
})

// path param with multipe value 
// http://localhost:9090/multiPathParam/100/Raj/12000
app.get("/multiPathParam/:id/:name/:salary",(request,response)=> {
    let id = request.params.id;
    let name = request.params.name;
    let salary = request.params.salary;
    response.send("Welcome user with multiple path param "+id+" Name is "+name+"Salary "+salary);
})

// store Employee details 
// http://localhost:9090/storeEmployee
// {"id":100,"name":"Raj","age":21}     : whole json object must be pass 
app.post("/storeEmployee",(request,response)=> {
        let employee = request.body;
        console.log(employee)
        response.send("employee data store");
})


// update Employee details 
// http://localhost:9090/updateEmployee
// {"id":100,"age":21}                      we can pass partial object. 
app.put("/updateEmployee",(request,response)=> {
    let employee = request.body;
    console.log(employee)
    response.send("employee data updated");
})

//delete Employee details 
// http://localhost:9090/deleteEmployeeInfo/100 
app.delete("/deleteEmployeeInfo/:id",(request,response)=> {
    let id = request.params.id;
    response.send("employee details deleted using id as "+id);
})


app.listen(9090,()=>console.log("Server running on port number 9090"));