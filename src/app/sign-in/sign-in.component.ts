import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiSignInService } from '../api-sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private _api: ApiSignInService,private _router: Router) {}

  errMsg = '';

  loginForm:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  login(){
    this._api.post(this.loginForm.value).subscribe((res:any)=>{
      // this.loginForm = res;
      console.log(res);
      if(res.isAdmin == true){
        this._router.navigate(['/admin']);      
      }
      if(res.isAdmin == false){
        this._router.navigate(['/']);      
      }
    });
  }
  // login() {
  //   if (
  //     this.loginForm.value.UserName == 'arjun' &&
  //     this.loginForm.value.Password == 'bala'
  //   ) {
  //     localStorage.setItem('user', JSON.stringify(this.loginForm.value));
  //     this._router.navigate(['/']);
  //     console.log(this.loginForm);
      
  //   } else {
  //     this.errMsg = 'Username/password does not match';
  //     console.log(this.errMsg);
      
  //   }
  // }
}
