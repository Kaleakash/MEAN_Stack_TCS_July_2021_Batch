let http = require("http");
let url = require("url");
let loginDetail = [
    {"user":"Raj","pass":"123"},
    {"user":"Ramesh","pass":"567"},
    {"user":"Raju","pass":"1100"},
]
let indexPage = `
            <html>
                    <head>

                    </head>
                    <body>
                    <h2>Welcome to Http Module</h2>
                    <a href="AboutUs">About Us Page </a> |
                    <a href="ContactUs">Contact Us Page</a> |
                    <a href="Login">Login Page </a>
                    </body>
            </html>
`
let loginPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Login Page</h2>
    <form action="checkLogin">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/>
       <input type="reset" value="reset"/> <br/>
       <a href="signup">Sign Up</a>
    </form>
</body>
</html> 
`

let registerLoginPage=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Registration Page</h2>
    <form action="register">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/>
       <input type="reset" value="reset"/> 
    </form>
</body>
</html>
`
let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    //console.log(urlInfo)
    //console.log("path "+urlInfo.path)   // path :path name with query details 
    //console.log("pathName"+urlInfo.pathname)    // pathname : only path 
    if(urlInfo.path != "/favicon.ico"){
        if(urlInfo.path == "/AboutUs"){
                response.write("Welcome to About Us Page");
        }else if(urlInfo.path == "/ContactUs"){
            response.write("Welcome to Contact Us Page");
        }else if(urlInfo.path == "/Login"){
            response.write(loginPage);
        }else if(urlInfo.pathname == "/checkLogin"){
                let login = urlInfo.query;
                let result = loginDetail.find(l=>l.user == login.user && l.pass==login.pass);
                if(result != undefined){
                        response.write("Successfully Login!");
                }else {
                        response.write("Failure try once again!");
                }
        }else if(urlInfo.path =="/signup"){
                response.write(registerLoginPage);
        }else if(urlInfo.pathname == "/register"){
                let login = urlInfo.query;
                let result = loginDetail.find(l=>l.user == login.user);
                // 200 -success code , content type in header text/html
                response.writeHead(200,{"content-type":"text/html"});
                if(result == undefined){
                    loginDetail.push(login);    // added user and pass in loginDetails
                    response.write("Account Created successfully!");     
                    response.write(loginPage);            
                    }else {
                        response.write("User Name must be unique!");     
                        response.write(loginPage); 
                }
        }
        else {
            response.write(indexPage);  
        }
    }
    
    response.end();

})

server.listen(9090,()=>console.log("Server running on port number 9090"))