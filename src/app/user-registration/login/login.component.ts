import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  GoogleLogin="googleIcon.png";
  FacebookLogin="Facebookicon.png";
  AppleLogin="Appleicon.png";

  login:boolean=true;

  Userlogin(){
    this.login=true;
  }

  newAccount(){
    this.login=false
  }


}
