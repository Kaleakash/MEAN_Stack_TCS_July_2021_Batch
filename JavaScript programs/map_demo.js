var mm = new Map();
mm.set(1,"Ravi");
mm.set(3,"Ramesh");
mm.set(4,"Rajesh");
mm.set(6,"Lokesh");
mm.set(5,"Ajay");
mm.set(7,"Vijay");
document.write(mm);
document.write("<br/>Size is "+mm.size)
mm.set(8,"Ravi");   // duplicate value 
mm.set(3,"Balaji")  // duplicate key
document.write("<br/>Size is "+mm.size);
document.write("<br> Get value using key "+mm.get(4))
document.write("<br> Get value using key "+mm.get(10))
document.write("<br> Delete record using key "+mm.delete(7))
document.write("<br> Delete record using key "+mm.delete(12))
document.write("<br> Retreive only keys <br>")
for(var k of mm.keys()){
    document.write("<br/>Keys "+k+"VAlue is "+mm.get(k));
}
document.write("<br> Retreive only values <br>")
for(var v of mm.values()){
    document.write("<br> VAlue is "+v);
}
document.write("<Br> key - value pairs <br>")
for(var en of mm.entries()){
    document.write("<br> "+en);
}