let http = require("http");
let url = require("url")
let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    //console.log(urlInfo)

    if(urlInfo.path != "/favicon.ico"){
        if(urlInfo.path == "/AboutUs"){
                response.write("Welcome to About Us Page");
        }else if(urlInfo.path == "/ContactUs"){
            response.write("Welcome to Contact Us Page");
        }else if(urlInfo.path == "/Login"){
            response.write("Welcome to Login Us Page");
        }else {
            response.write("Not Found Page");  
        }
    }
    response.end();
})


server.listen(9090,()=>console.log("Server running on port number 9090"))