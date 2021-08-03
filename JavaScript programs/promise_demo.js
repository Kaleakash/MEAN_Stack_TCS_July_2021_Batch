//ES5 style promise object creation 

// var obj1 = new Promise(function(resolve,reject){
//     resolve("done")
// })

// obj1.then(function(data){
//     document.write("Then called..."+data)
// }).catch(function(error){
//     document.write("Catch called.."+error)
// })

// // ES6 style 
// var obj2 = new Promise((resolve,reject)=> {
//     reject("failure")
// })

// obj2.then(data=>document.write("then "+data)).catch(error=>document.write("catch"+error))

// document.write("<br/> Normal Statement<br/>")

fetch("https://jsonplaceholder.typicode.com/todos").
then(res=>res.json()).then(data=>console.log(data)).catch(error=>console.log(error));
console.log("1st Statement")
console.log("2nd Statement")




