import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { USER } from 'src/environments/endpoints';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : RequestService) {
    
  }
  /**
   * Método login, ( nesse caso ele  recebe a lista de usuários e percorre para tentar encontrar )
   */
  login(user : User){
    return this.http.get(USER).pipe(map(
      (res : Array<User>)=>{
        for (let i = 0; i < res.length; i++) {
          if(res[i].email === user.email && res[i].password === user.password) { 
            localStorage.setItem("user", JSON.stringify(res[i].id))
            return true
          }
        }
      }
    ))
  }

  /**
   * Método para verificar se o usuário está logado ou não
   */
  isLogged() : boolean{
    return this.getUserId() == null ? false : true;
  }

  /**
   * Método para paegar o usuário salvo no localStorage
   */
  getUserId(){
    return localStorage.getItem("user")
  }


  logOut(){

  }



}
