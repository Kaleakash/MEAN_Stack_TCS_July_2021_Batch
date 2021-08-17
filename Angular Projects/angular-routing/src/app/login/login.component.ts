import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });
  msg:string=""
    constructor(public router:Router) { } //DI
  ngOnInit(): void {
  }
  checkUser(){
    let login = this.loginRef.value;
    if(login.user=="Raj" && login.pass=="123"){
          this.router.navigate(["home",login.user]);  // appended name through path
    } else {
        this.msg  = "InValid username or password";
    }
    this.loginRef.reset();   
  }
}
