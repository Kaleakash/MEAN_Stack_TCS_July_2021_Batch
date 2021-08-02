let emp1 = {id:100,name:"Ajay",age:21,result:true};
document.write(emp1);
document.write("<br/>")
document.write("Object in literal format<br/>")
document.write("<br/>Id is "+emp1.id)
document.write("<br>name is "+emp1.name)
document.write("<br/>Age is "+emp1.age)
document.write("<br/>Result is "+emp1.result)
// We have to convert javascript object into string format 
// stringify function help to convert object/json to string  
let empString = JSON.stringify(emp1);
    document.write("<br> id is "+empString.id)
document.write("<br/>")
document.write(empString)
document.write("<br/>")
// then we have to convert string to json 
 let empJson = JSON.parse(empString);
 document.write("<br/>")
 document.write(empJson);
 document.write("<br/>Object in JSOn format")
 document.write("<br/>Id is "+empJson.id)
 document.write("<br/>name is "+empJson.name)
 document.write("<br/>Age is "+empJson.age)
 document.write("<br/>Result is "+empJson.result)
