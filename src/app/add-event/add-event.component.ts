import { Component } from '@angular/core';
import { ApiEventService } from '../api-event.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  constructor(private _api:ApiEventService, private _router:Router){}

  eventForm:FormGroup=new FormGroup({
    title : new FormControl(''),
    typeOfEvent : new FormControl(''),
    description : new FormControl(''),
    imageURL : new FormControl(''),
    maxMembers : new FormControl(''),
    date : new FormControl('')
  });
  
  save(){
    this._api.save(this.eventForm.value).subscribe((res:any)=>{
      this._router.navigate(['/admin'])
      
    });
  }

  click(){
    this._router.navigate(["/admin"])
  }
}
