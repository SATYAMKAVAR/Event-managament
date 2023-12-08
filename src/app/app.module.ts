import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RulesComponent } from './rules/rules.component';
import { LucideAngularModule, Mail , Contact , MapPinned} from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    ContactUsComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LucideAngularModule.pick({ Mail,Contact,MapPinned })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
