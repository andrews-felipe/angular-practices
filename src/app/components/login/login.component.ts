import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Intância do formGroup para usar no DOM
  loginForm : FormGroup

  message : string
  viewAlert : boolean = false
  
  constructor(private auth : AuthService, private form : FormBuilder, private route : Router) { }

  /**
   * Primeiro método do componente : @loginForm recebe os campos de formBuilder
   */
  ngOnInit() {
    this.loginForm = this.form.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })

  }

  submit(){
    console.log(this.loginForm.getRawValue())
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.getRawValue()).toPromise().then(
        ()=>{
        console.log('Login is Success!!')
        this.route.navigate(['home'])
        }
      )
    }else{
      this.showMessage('Preencha os campos corretamente')
    }
  }

  /**
   * Método para mostrar o alert na tela
   * @param message 
   */
  showMessage(message){
    this. message = message;
    this.viewAlert = !this.viewAlert
    setTimeout(() => {
       this.viewAlert = !this.viewAlert
    }, 5000);
  }


  

}
