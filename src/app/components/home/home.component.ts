import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RequestService } from 'src/app/services/request.service';
import { USER } from 'src/environments/endpoints';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private userList : Observable<Array<User>>

  private currentUser : Observable<User>

  constructor(private auth : AuthService, private request : RequestService) { }

  ngOnInit() {  
    this.currentUser = this.request.getById(USER, this.auth.getUserId())
    this.userList = this.request.get(USER)
  }

}
