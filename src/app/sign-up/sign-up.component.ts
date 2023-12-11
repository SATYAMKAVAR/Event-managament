import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiSignInService } from '../api-sign-in.service';
import { ApiSignUpService } from '../api-sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  
  constructor(private _api: ApiSignUpService,private _router: Router) {}


  loginForm:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email : new FormControl(''),
    mobile : new FormControl(0)
  });

  signup(){
    this._api.post(this.loginForm.value).subscribe((res:any)=>{
      // this.loginForm = res;
      console.log(this.loginForm);
      this._router.navigate(['/']);
      console.log(res);
    });
  }
}
