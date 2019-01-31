import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http : HttpClient) { }


  get(endpoint : string) : Observable<any>{
    return this.http.get(`${API_URL}${endpoint}`)
  }

  getById(endpoint : string, id : string) : Observable<any>{
    return this.http.get(`${API_URL}${endpoint}/${id}`)
  }

  post(endpoint : string, object : any){
    return this.http.post(`${API_URL}${endpoint}`, object)
  }

  put(endpoint : string, id : string , object : any){
    return this.http.put(`${API_URL}${endpoint}/${id}`, object)
  }

  delete(endpoint : string, id : string){
    return this.http.delete(`${API_URL}${endpoint}/${id}`)
  }

}
