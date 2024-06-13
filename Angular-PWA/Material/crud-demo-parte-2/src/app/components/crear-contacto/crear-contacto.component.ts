import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-contacto',
  standalone: true,
  imports: [],
  templateUrl: './crear-contacto.component.html',
  styleUrl: './crear-contacto.component.css'
})
export class CrearContactoComponent {

  constructor(private router:Router){

  }

  volver(){
    this.router.navigate([""])
  }
  
}
