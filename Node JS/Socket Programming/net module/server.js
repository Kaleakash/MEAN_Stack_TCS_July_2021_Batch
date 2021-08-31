// load the module 
let net = require("net");

// creating the server reference 
let server = net.createServer();

// This function get call if any client send request to 
// server using port number. 
server.on("connection",(socket)=> {
    console.log("Client connected..")

    // receive the data from client program 
    socket.on("data",(msg)=> {
        console.log(msg.toString());
    })

    // send data to client application 
    socket.write("Hello Client, You Successfully connected chatting application!")
})


// running server on port number 9090
server.listen(9090,()=>console.log("Server running on port number 9090"))