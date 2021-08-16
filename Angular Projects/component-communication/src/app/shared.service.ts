import { Injectable } from '@angular/core';
import { Emp } from './Emp.model';

@Injectable({
  providedIn: 'root'  // it is equal to provider attribute in app.module.ts file 
})
export class SharedService {

  constructor() { }

  emps:Array<Emp>=[];

  setEmpArray(emps:Array<Emp>): void {
    this.emps=emps;
  }

  getEmpArray(): Array<Emp>{
    return this.emps;
  }

}
