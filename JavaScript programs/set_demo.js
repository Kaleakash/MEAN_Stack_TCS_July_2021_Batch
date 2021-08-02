var ss = new Set();
document.write("Size is "+ss.size+"<br/>");
ss.add("Raj");
ss.add("Ravi");
ss.add("Ajay");
ss.add("Vijay");
ss.add("Ramesh");
ss.add("Ramesh");   // not allow duplicate 
document.write(ss+"<br/>");
document.write("Size is "+ss.size+"<br/>");
document.write("<br/>Search "+ss.has("Raj"))
document.write("<br/>Search "+ss.has("Mahesh"))
ss.delete("Ajay");
document.write("<br/>Size is "+ss.size+"<br/>");
for(s of ss){
    document.write("<br/> VAlue is "+s);
}
document.write("<br/>using arrow with callback<br/>")
ss.forEach(v=>document.write("<br> VAlue is "+v));