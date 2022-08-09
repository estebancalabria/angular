import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SecretComponent } from './components/secret/secret.component';

const routes: Routes = [
  {path : "", component:HomeComponent},
  {path : "register", component:RegisterComponent},
  {path : "login", component : LoginComponent},
  {path : "secret", component : SecretComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
