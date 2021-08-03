// statement level 
//document.write("1st Statement")
setTimeout(()=> {
    document.getElementById("obj2").innerHTML="<br/>1st Statement"
},2000);
//document.write("<br/>2nd Statement")
setTimeout("dis()",4000);
    document.write("<br/>3rd Statement")
setInterval("info()",1000);
function dis() {
    //document.write("<br> 2nd Statement");
    document.getElementById("obj1").innerHTML="<br> 2nd Statement";
}
var i=0;
function info() {
    document.getElementById("obj3").innerHTML="<br/> 4th Statement "+i
    i++;
}