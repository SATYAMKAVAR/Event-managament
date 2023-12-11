import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RulesComponent } from './rules/rules.component';
import { ClientEventsComponent } from './client-events/client-events.component';
import { authenicationGuard } from './authenication.guard';
import { AdminEventByIdComponent } from './admin-event-by-id/admin-event-by-id.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AdminComponent } from './admin/admin.component';
import { ClientEventDetailsComponent } from './client-event-details/client-event-details.component';
import { EditEventComponent } from './edit-event/edit-event.component';

const routes: Routes = [
  {path:'',component:ClientEventsComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'rules',component:RulesComponent},
  {path:"add-event", component:AddEventComponent},
  {path:"admin", component:AdminComponent},
  {path:"admin/:id", component:AdminEventByIdComponent},
  {path:"admin-edit/:id", component:EditEventComponent},
  {path:"client-event",component:ClientEventsComponent},
  {path:"admin/edit/:id",component:EditEventComponent},
  {path:"admin/:id",component:AdminEventByIdComponent},
  {path:":id",component:ClientEventDetailsComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
