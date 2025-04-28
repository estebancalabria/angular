import { Component, ViewChild } from '@angular/core';
import { ReceptorUsuarioComponent } from './components/receptor-usuario/receptor-usuario.component';
import { UsuarioModel } from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase-tres';
  
  @ViewChild(ReceptorUsuarioComponent)
  hijo!:ReceptorUsuarioComponent;

  recibirModelo(usuario:UsuarioModel){
    //alert("appComponent recibio a " + usuario.nombre);
    this.hijo.recibirUsuario(usuario);
  }
}
