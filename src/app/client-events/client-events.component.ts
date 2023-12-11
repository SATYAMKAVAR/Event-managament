import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientEventsService } from '../api-client-events.service';

@Component({
  selector: 'app-client-events',
  templateUrl: './client-events.component.html',
  styleUrl: './client-events.component.css',
})
export class ClientEventsComponent {
  
  events = [{_id:"",title:"",description:"",date:"",typeOfEvent:"",maxMembers:0,imageURL:""}]
  constructor(private _api:ApiClientEventsService, private _router:Router){}

  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      console.log(res)
      this.events = res;
    });
  }

  eventById(id:any){
    this._router.navigate(['/',id]);
    console.log(id)
  }


}
