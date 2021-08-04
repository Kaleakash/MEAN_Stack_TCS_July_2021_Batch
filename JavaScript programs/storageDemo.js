function storeData() {
    // take value from text field using id or name
    //we can store json object. but we have to convert 
    // into string. 
    let emp = {id:100,name:"Ajay",age:21};
    sessionStorage.setItem("empObj",JSON.stringify(emp));
    sessionStorage.setItem("obj1","Raj");
    localStorage.setItem("obj1","Raju");
    console.log("Data store in session and local storage")
}
function getData() {
    let abc = sessionStorage.getItem("obj1");
    let xyz = localStorage.getItem("obj1")
    let empObj = sessionStorage.getItem("empObj");
    let empJson = JSON.parse(empObj)
    console.log("emp obj "+empJson);
    console.log("Value from session Storage is "+abc);
    console.log("Value from local storage is "+xyz);
}
function removeData() {
    sessionStorage.removeItem("obj1");
    localStorage.removeItem("obj1");
}

function displayData() {
    let empObj = sessionStorage.getItem("empObj");
    let empJson = JSON.parse(empObj)
    var tableContent=""
    var startTable ="<table border=1 class='table'><tr><th>Id</th><th>Name</th><th>Age</th></tr>"
    
    tableContent ="<tr><td>"+empJson.id+"</td><td>"+empJson.name+"</td><td>"+empJson.age+"</td></tr>"
    
    var endTable="</table>"
    tableContent = startTable+tableContent+endTable
    document.getElementById("main").innerHTML=tableContent;
}