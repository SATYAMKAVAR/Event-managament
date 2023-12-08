import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'rules',component:RulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
