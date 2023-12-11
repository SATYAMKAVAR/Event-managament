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
import { LucideAngularModule, Mail , Contact , MapPinned ,Plus} from 'lucide-angular';
import { ClientEventsComponent } from './client-events/client-events.component';
import { ClientEventDetailsComponent } from './client-event-details/client-event-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminEventByIdComponent } from './admin-event-by-id/admin-event-by-id.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AdminComponent } from './admin/admin.component';
import { EditEventComponent } from './edit-event/edit-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    ContactUsComponent,
    RulesComponent,
    ClientEventsComponent,
    ClientEventDetailsComponent,
    AddEventComponent,
    AdminComponent,
    AdminEventByIdComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LucideAngularModule.pick({ Mail,Contact,MapPinned ,Plus}),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
