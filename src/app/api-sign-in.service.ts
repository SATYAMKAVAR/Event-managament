import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiSignInService {

  constructor(private _http: HttpClient) { }
  apiUrl = 'https://event-management-api-qd2e.onrender.com';

  post(data:any) {
    return this._http.post(this.apiUrl+'/signin',data,{headers:{"Content-Type":"application/json"}});
  }
}
