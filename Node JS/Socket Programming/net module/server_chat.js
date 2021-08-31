// load the module 
let net = require("net");
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
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

    r1.on("line",(input)=> {
        socket.write(`Server Say : ${input}`)
    });
})


// running server on port number 9090
server.listen(9090,()=>console.log("Server running on port number 9090"))