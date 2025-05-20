import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { OnlineStatusComponent } from './online-status/online-status.component';
import { ListaAlumnosComponent } from "./lista-alumnos/lista-alumnos.component";

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, ContadorComponent, OnlineStatusComponent, ListaAlumnosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo : string = 'Bienvenido a mi aplicacion de Angular';
  centrado : string = 'center';
}
