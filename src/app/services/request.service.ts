import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http : HttpClient) { }

  /**
   * Método GET usando httpClient para requisições get
   * @param endpoint 
   */
  get(endpoint : string) : Observable<any>{
    return this.http.get(`${API_URL}${endpoint}`)
  }

  /**
   * Método GET:id para requisições passando o id do objeto em específico
   * @param endpoint 
   * @param id 
   */
  getById(endpoint : string, id : string) : Observable<any>{
    return this.http.get(`${API_URL}${endpoint}/${id}`)
  }

  /**
   * Método POST para envio de informações no backend
   * @param endpoint 
   * @param object 
   */
  post(endpoint : string, object : any){
    return this.http.post(`${API_URL}${endpoint}`, object)
  }

  /**
   * Método PUT para alteração de um objeto no backend
   * @param endpoint 
   * @param id 
   * @param object 
   */
  put(endpoint : string, id : string , object : any){
    return this.http.put(`${API_URL}${endpoint}/${id}`, object)
  }

  /**
   * Método DELETE para excluir um dado no backend
   * @param endpoint 
   * @param id 
   */
  delete(endpoint : string, id : string){
    return this.http.delete(`${API_URL}${endpoint}/${id}`)
  }

}
