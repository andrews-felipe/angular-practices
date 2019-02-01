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

  // Variável para mensagens de alert
  message : string
  // Variável booleana para mostrar o alert na tela
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

  /**
   * Método para envio do email e senha para o método login no service auth, caso dê certo o usuário é redirecionado para a página home
   */
  submit(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.getRawValue()).toPromise().then(
        (res)=>{   // resposta booleana definida no auth service método login 
          if(res){
            console.log('Login is Success!!')
            this.route.navigate(['home'])    
          }
          else{
            this.showMessage('Usuário ou Senha Inválidos!')
          }
        }
      )
    }else{
      this.showMessage('Preencha os campos corretamente!')
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
