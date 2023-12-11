import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private _router:Router){}
  title = 'sixthapp';
  isAdmin = true;

  logout(){
    localStorage.removeItem('user');
    this._router.navigate(['/sign-in'])
    this.isAdmin= false
  }
}
