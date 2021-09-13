let express = require("express");
let app= express();

app.get("/simpleMsg",(request,response)=> {
    response.send("welcome express using docker")
})

app.get("/user/:name",(request,response)=> {
    let name = request.params.name;
    response.send("Welcome user "+name);
})

app.listen(9090,()=>console.log("running on 9090 port number"))