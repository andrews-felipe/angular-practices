import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http : HttpClient) { }


  get(endpoint : string) : Observable<any>{
    return this.http.get(`${endpoint}${endpoint}`)
  }

  getById(endpoint : string, id : string) : Observable<any>{
    return this.http.get(`${endpoint}${endpoint}/${id}`)
  }

  post(endpoint : string, object : any){
    return this.http.post(`${endpoint}${endpoint}`, object)
  }

  put(endpoint : string, object : any){
    return this.http.put(`${endpoint}${endpoint}`, object)
  }

  delete(endpoint : string, object : any){
    return this.http.delete(`${endpoint}${endpoint}`, object)
  }

}
