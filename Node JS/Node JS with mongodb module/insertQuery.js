// load the module and create the reference of mongodb module 
let mongoClient = require("mongodb").MongoClient;
//url Details
let url ="mongodb://localhost:27017";
// connect the database 
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected")
        let db = client.db("tcsmean");
        let employees = [
            {_id:17,name:"Seeta",salary:42000,deptId:100,city:"Delhi"},
            {_id:18,name:"Reeta",salary:49000,deptId:200,city:"Bangalore"},
            {_id:19,name:"Veeta",salary:36000,deptId:300,city:"Mumbai"}
        ]
        let emp = {_id:16,name:"Mahesh",salary:42000,deptId:100,city:"Delhi"};
        db.collection("Employees").insertMany(employees,(err,result)=> {
            if(!err){
                console.log("Record inserted successfully")
                console.log(result);
            }else {
                console.log(err);
            }
            client.close();
        })
    }else {
        console.log(err);
    }
})