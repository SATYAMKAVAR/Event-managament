import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiEventService } from '../api-event.service';
import { FormControl, FormGroup} from '@angular/forms';
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
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})


export class AdminComponent {

  constructor(private _router: Router, private _api: ApiEventService,private _activatedRoute:ActivatedRoute) { }
  events:Array<event>=[]

  ngOnInit() {
    this._api.getAll().subscribe((res: any) => {
      console.log(res)
      this.events = res;
    });
  }

  add() {
    this._router.navigate(["/add-event"])
  }

  adminEventById(id: String) {
    this._router.navigate(["/admin/", id])
  }

  setForEdit(id: String) {
    this._router.navigate(["/admin/edit/", id])
  }

  //Add-event
  addEventForm:FormGroup=new FormGroup({
    title : new FormControl(''),
    typeOfEvent : new FormControl(''),
    description : new FormControl(''),
    imageURL : new FormControl(''),
    maxMembers : new FormControl(''),
    date : new FormControl('')
  });
  
  addSave(){
    this._api.save(this.addEventForm.value).subscribe((res:any)=>{
      this.ngOnInit();
    });
  }

  //Edit-event
  // editEventForm:FormGroup=new FormGroup({
  //   title : new FormControl(''),
  //   typeOfEvent : new FormControl(''),
  //   description : new FormControl(''),
  //   imageURL : new FormControl(''),
  //   maxMembers : new FormControl(''),
  //   date : new FormControl('')
  // });
  // id:number=0;
  // editEvent=new event();

  // setForEdit(id : any){
  //   console.log("Setforedit called")
  //   this.id = id;
  //   this._api.getById(id).subscribe((res:any)=>{
  //     this.editEvent = res;
  //     console.log(this.editEvent)
  //     this.editEventForm.get('title')?.setValue(this.editEvent.title)
  //     this.editEventForm.get('typeOfEvent')?.setValue(this.editEvent.typeOfEvent)
  //     this.editEventForm.get('description')?.setValue(this.editEvent.description)
  //     this.editEventForm.get('imageURL')?.setValue(this.editEvent.imageURL)
  //     this.editEventForm.get('maxMembers')?.setValue(this.editEvent.maxMembers)
  //     this.editEventForm.get('date')?.setValue(this.editEvent.date)
  //   });
  // }

  // editSave(){
  //   var tempEvent=new event()
  //   tempEvent={...this.editEventForm.value,id:this.id}
  //   this._api.edit(tempEvent,this.id).subscribe((res:any)=>{
  //     this.ngOnInit();
  //   });
  // }
}
