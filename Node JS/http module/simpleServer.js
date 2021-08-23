// load the module 
let http  = require("http");
let server = http.createServer((request,response)=> {
        //response.end("Welome to http module simple example");
        //response.end("<b>Welome to http module simple example</b>");
        response.end("<font color='red'>Welcome to Http Simple Example</font>");
});

server.listen(9090,()=>console.log("Server is running on port number 9090"))

/*
run the program using command as node simpleServer.js 
Then open browser and hit url as 
http://localhost:9090

*/