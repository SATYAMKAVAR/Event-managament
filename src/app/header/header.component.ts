import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private _router:Router){}
  isSignIn = true;
  // isSingIn() : boolean {
  //   console.log("sf");
  //   if(localStorage.getItem('signInStatus') == 'true'){
  //     console.log("sf");
      
  //     return true;
  //   }
  //   return true;
  // }
  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('isSignIn');
    this._router.navigate(['/sign-in'])
    // this.isSignIn = false
  }
}
