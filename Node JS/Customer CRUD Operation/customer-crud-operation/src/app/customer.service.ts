import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { } //DI for HttpClient 

  // post method take 2 parameter 
  // 1st parameter url and 2nd parameter data in json format. 
  storeCustomerInfo(customer:Customer):Observable<any>{
    return this.http.post<any>("http://localhost:9090/storeCustomerInfo",customer);
  }
}
