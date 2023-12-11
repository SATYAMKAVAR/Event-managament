import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiClientEventsService {

  constructor(private _http : HttpClient) { }
  apiUrl = "https://event-management-api-qd2e.onrender.com"
  getAll(){
    return this._http.get(this.apiUrl + "/events");
  }

  getById(id:any){
    return this._http.get(this.apiUrl+"/events/"+id);
  }

  delete(id:any){
    return this._http.delete(this.apiUrl+"/events",{
      "body":{id:id}
    });
  }

  save(data:any){
    console.log(data)
    return this._http.post(this.apiUrl + "/events",data,{headers:{"Content-Type":"application/json"}});
  }

  edit(data:any){
    return this._http.put(this.apiUrl+"/events",data,{headers:{"Content-Type":"application/json"}});
  }
}
