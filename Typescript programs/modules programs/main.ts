import {dis1,display} from './abc';
import {dis2,display as dis} from './xyz';
import * as obj1 from './info';
dis1();
dis2();
display();
dis();
var result = obj1.add(100,200);          // calling function 
console.log(result)
console.log(obj1.abc);      // accessing value 
let obj = new obj1.Employee();  // creating memory 
obj.disInfo();                  // calling function part of class. 