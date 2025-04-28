import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-receptor-usuario',
  templateUrl: './receptor-usuario.component.html',
  styleUrls: ['./receptor-usuario.component.css']
})
export class ReceptorUsuarioComponent implements OnInit {

  texto:string = "No se recibio aun el usuario";

  constructor() { }

  ngOnInit(): void {
  }

  recibirUsuario(usr:UsuarioModel){
    this.texto = "Se recibio al usuario " + usr.nombre;
  }

}
