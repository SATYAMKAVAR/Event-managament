import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiEventService } from '../api-event.service';

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

  constructor(private _router: Router, private _api: ApiEventService) { }
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

  openModel(){
    const modelDiv = document.getElementById('exampleModalCenter');
    
    if(modelDiv != null){
      modelDiv.style.display = 'block';
    }
  }

  closeModel(){
    const modelDiv = document.getElementById('exampleModalCenter');
    console.log("closemodel")
    if(modelDiv != null){
      modelDiv.style.display = 'none';
    }
  }
}
