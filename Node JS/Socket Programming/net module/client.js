// load the module 
let net = require("net");

// this code use to connect server program using ip and port number
let client = net.createConnection(9090,"localhost",()=> {

    // send data to server program 
    client.write("Hello Server, I am Client.....");

    // It is use to receive the message from server application
    client.on("data",(msg)=> {
        console.log(msg.toString())
    })

})

