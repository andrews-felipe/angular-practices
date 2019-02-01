import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { USER } from 'src/environments/endpoints';
import { User } from 'src/app/models/user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // Intância do formGroup para usar no DOM
  signForm: FormGroup
  message: string
  viewAlert: boolean = false
  
  buttonDisable : boolean
  user : User = new User()

  constructor(private request: RequestService, private form: FormBuilder, private route: Router) { }

  /**
   * Primeiro método do componente : @loginForm recebe os campos de formBuilder
   */
  ngOnInit() {
    this.signForm = this.form.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      name: ['', Validators.compose([Validators.required])]
    })
    
  }

  /**
   * Método para cadastrar usuário
   */
  submit() {
    let newUser = Object.assign({}, this.user, this.signForm.getRawValue())    // aqui, juntamos dois objetos, isso porque o usuário digita apenas 3 campos mas eu preciso iniciar os outros atributos como 0 ex. matchs ou avatar que é alguns dos atributos definido no model
    
    if (this.signForm.valid) {    // pergunto se o formulário é válido, se passou nos quesitos que definimos no ngOnInit
      
      this.buttonDisable = true   // disativando o butão cadastrar para que não seja apertado várias vezes após o cadastro
      
      this.request.post(USER, newUser).toPromise()   // chamando o post e enviando o objeto usuário, depois transformando em promise para verificar se deu certo
      
        .then(()=> { 
          this.showMessage('Usuário Cadastrado!')  // o uso do then é pra quando der certo
          setTimeout(() => {
            this.route.navigate(['login'])  
          }, 3000);
        })   
        .catch(()=> this.showMessage('Erro ao cadastrar!')    // o catch é para quando não der certo
      )
    }else{
      this.showMessage('Preencha os campos corretamente!') // se não for válido o form, mostre um alert 
    }
  }

  /**
   * Método para mostrar o alert na tela
   * @param message 
   */
  showMessage(message) {
    this.message = message;
    this.viewAlert = !this.viewAlert
    setTimeout(() => {
      this.viewAlert = !this.viewAlert
    }, 5000);
  }

}
