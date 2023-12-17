import { Component } from '@angular/core';
import { ApiEventService } from '../api-event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiClientEventsService } from '../api-client-events.service';
class event{
  _id:string="";
  title:String="";
  description:String="";
  date:String="";
  typeOfEvent:String="";
  maxMembers:Number=0;
  imageURL:String="";
}
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent {
  constructor(private _api:ApiClientEventsService, private _router:Router, private _activatedRoute:ActivatedRoute){}
  
  eventForm:FormGroup=new FormGroup({
    title : new FormControl(''),
    typeOfEvent : new FormControl(''),
    description : new FormControl(''),
    imageURL : new FormControl(''),
    maxMembers : new FormControl(''),
    date : new FormControl('')
  });
  id:number=0;
  event=new event();

  ngOnInit(){
    this.id = this._activatedRoute.snapshot.params['id'];
    this._api.getById(this.id).subscribe((res:any)=>{
      this.event = res;
      console.log(this.event)
      this.eventForm.get('title')?.setValue(this.event.title)
      this.eventForm.get('typeOfEvent')?.setValue(this.event.typeOfEvent)
      this.eventForm.get('description')?.setValue(this.event.description)
      this.eventForm.get('imageURL')?.setValue(this.event.imageURL)
      this.eventForm.get('maxMembers')?.setValue(this.event.maxMembers)
      this.eventForm.get('date')?.setValue(this.event.date)
    });
  }
  save(){
    var tempEvent=new event()
    tempEvent={...this.eventForm.value,id:this.id}
    this._api.edit(tempEvent).subscribe((res:any)=>{
      this._router.navigate(['/admin'])
    });
  }

  click(){
    this._router.navigate(["admin"])
  }
}
