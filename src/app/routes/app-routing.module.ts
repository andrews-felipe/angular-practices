import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AuthGuard } from '../guards/auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';


const routes: Routes = [

  // Public Routers
  { path : 'login' , component : LoginComponent },
  { path : 'cadastro' , component : SignUpComponent },
  { path : '', redirectTo : 'login', pathMatch : 'full' },
  { path : '**', component : PageNotFoundComponent },

  // Private Routers
  {
    path: 'home', canActivate: [AuthGuard], component : HomeComponent,  
      children: [
        {path: '', redirectTo : 'home', pathMatch : 'full'}
      ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
