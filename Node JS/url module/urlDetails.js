const { copyFileSync } = require("fs");
let url = require("url")
let urlDetails = "http://localhost:9090/simpleWebApp?name=Raj&age=21";
console.log(urlDetails);
//let urlRef  =  url.parse(urlDetails);   // query property consider as string. 
let urlRef  =  url.parse(urlDetails,true);  // query property consider as reference.
console.log(urlRef);
console.log("Protocol "+urlRef.protocol);
console.log("port number "+urlRef.port)
console.log("host name "+urlRef.hostname)
console.log("path name "+urlRef.pathname)
let queryInfo = urlRef.query;
console.log(queryInfo);             // string consider 
console.log(queryInfo.name)
console.log(queryInfo.age)