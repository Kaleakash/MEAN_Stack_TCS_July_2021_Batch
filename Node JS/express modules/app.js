// load the module 

let express = require("express");
let bodyParser = require("body-parser");

let userDetails = [];

//creating the reference of express module 
let app = express();
// which is use to enable post data receving from normal html form. 
app.use(bodyParser.urlencoded({extended:true}))



app.get("/",(request,response)=> {
    response.send("Welcome to Express JS Simple Module");
})
app.get("/aboutus",(request,response)=> {
    //response.send("Welcome to About us page");
    response.sendFile(__dirname+"\\aboutus.html");
})
app.get("/contactus",(request,response)=> {
    //response.send("Welcome to contact us page");
    response.sendFile(__dirname+"\\contactus.html");
})
app.get("/index",(request,response)=> {
    //response.send("Welcome to index page");
    //response.sendFile("C:\\Users\\91990\\Desktop\\TCS MEAN Stack Training 2021\\Notes\\MyRepository\\Node JS\\express modules\\index.html");
    //response.send(__dirname);
    response.sendFile(__dirname+"\\index.html");
})

app.get("/login",(request,response)=> {
    response.sendFile(__dirname+"\\login.html");
})

app.get("/checkUser",(request,response)=> {
    // let user = request.query.user;      // to receive text field value 
    // let pass = request.query.pass;
    // console.log(user);
    // console.log(pass);
    let user = request.query["user"];
    let pass = request.query["pass"];
    if(user=="Raj" && pass=="123"){
            response.send("Successfully Login!");
    }else {
            response.send("Failure try once again!");
    }
})

app.get("/SignUp",(request,response)=> {
    response.sendFile(__dirname+"\\register.html");
})

// app.get("/register",(request,response)=>{
//     response.send("Get method...");
// });

app.post("/register",(request,response)=>{
            let userDetail = request.body;
            userDetails.push(userDetail);
            //response.write("Account Created successfuly")
            response.sendFile(__dirname+"\\login.html");
});


app.listen(9090,()=>console.log("Server running on port number 9090"))
