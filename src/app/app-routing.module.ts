import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { RegisterComponent } from './componentes/register/register.component';
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'/main'},
  {path:'main', 
  component: MainComponent,
  ...canActivate( () => redirectUnauthorizedTo(['/login']))
},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
