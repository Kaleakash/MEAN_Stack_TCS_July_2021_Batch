// load the express module 
let express = require("express");

// create the reference of express module 
let app = express();

// then load the express-ws module and create the reference 
//of express-ws with the help of express reference using 
// IIFE
let ws = require("express-ws")(app);

// http://localhost:9090
// open the html static web page 
app.get("/",(request,response)=> {
    response.sendFile(__dirname+"\\index.html");
})

app.ws("/",(socket,request)=> {
    console.log("Client connected");

    // recieve message from client application 
    socket.on("message",(msg)=> {
        console.log(msg);
        
    });
    // This is use to send the data to the client application.
    socket.send("Hello Client, YOu are connect the Socket Server App!");
})


app.listen(9090,()=>console.log("Server running on port number 9090"))

