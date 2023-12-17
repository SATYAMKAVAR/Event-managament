import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEventService {

  constructor(private _http : HttpClient) { }
  apiUrl = "https://event-management-api-qd2e.onrender.com"
  getAll(){
    return this._http.get(this.apiUrl + "/events");
  }

  getById(id:any){
    return this._http.get(this.apiUrl+"/events"+id);
  }

  delete(id:any){
    return this._http.delete(this.apiUrl+"/"+id);
  }

  save(data:any){
    return this._http.post(this.apiUrl + "/events",data);
  }

  edit(data:any,id:any){
    return this._http.put(this.apiUrl+"/"+id,data);
  }
}
