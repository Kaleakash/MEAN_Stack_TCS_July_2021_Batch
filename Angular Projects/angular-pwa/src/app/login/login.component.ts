import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginSer:LoginService) { }   // DI for Login Service

  ngOnInit(): void {
  }
  msg?:string=""
  checkUser(loginRef:NgForm){
    let login = loginRef.value;
    let flag=0;
    this.loginSer.checkUserInfo().subscribe(result=> {
      for(let ll of result){
        if(ll.user == login.user && ll.pass==login.pass){
            flag++;
        }
      }
        if(flag>0){
         this.msg="Successfully Login"
        }else {
          this.msg = "Failure try once again";
        }
    });

    flag=0;
  }
}
