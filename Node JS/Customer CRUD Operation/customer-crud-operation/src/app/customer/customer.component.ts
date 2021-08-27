import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerRef = new FormGroup({
    cid:new FormControl(),
    cname:new FormControl(),
    age:new FormControl()
  });
  storeMsg?:string;
  constructor(public custSer:CustomerService) { } // DI for Customer Service 
  ngOnInit(): void {
  }
  storeInfo() {
    let customer = this.customerRef.value;
    //console.log(customer);    
    this.custSer.storeCustomerInfo(customer).subscribe(result=>{
      //console.log(result)
      this.storeMsg=result.msg;
    },error=>console.log(error));

    this.customerRef.reset();
  }

}


