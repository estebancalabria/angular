import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptosComponent } from './components/cryptos/cryptos.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cryptos", component: CryptosComponent },
  { path: "cuenta", component: CuentaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
