var num1 = [10,20,30,40,50,60]; //literal style 

var num2 = new Array(10,20,30,40,50,60);    // memory creation 

document.write("display array as a string<br/>")
document.write(num1)
document.write("<br>")
document.write(num2)
document.write("<br>")
document.write(num1.join("-"))
document.write("<br> Get Element using index position "+num1[0])
document.write("<br> Get Element using index position "+num1[1])
document.write("<br> Size of array "+num1.length);
document.write("<br> Display the records using for loop<br>")
for(var i=0;i<num1.length;i++){
    document.write("<br> value of i is "+num1[i]);
}
document.write("<br/>Display the value one by one using callback <br/>")
num1.forEach(display)

function display(n) {
    document.write("<br> Value of n is "+n)
}
document.write("<br> Another way to retrieve the value <br>")
num1.forEach(function(n){
    document.write("<br/> Value of n is "+n);
})
document.write("<br> Another way to retrieve using arrow function <br>")
num1.forEach(n=>document.write("<br> VAlue of n is "+n));
