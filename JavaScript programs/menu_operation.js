//alert("Welcome to External JS")
function addData() {
   // alert("Event fired...")
   //This code create p tag 
   var name = document.getElementById("name").value;
   var age = document.getElementById("age").value;

   var myPTag = document.createElement("p");

   //This code create text node 
   var myPTagContent = document.createTextNode("Name is "+name+" Age is "+age);
   myPTag.setAttribute("style","color:red;");     //inline css 
   myPTag.setAttribute("class","myPClass");        // external Css 
   //This code add text node to p tag 
   myPTag.appendChild(myPTagContent);

   // refer the tag using id selector and append the p tag to div tag
   document.getElementById("info").appendChild(myPTag);
}
