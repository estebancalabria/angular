import { Component } from '@angular/core';
import { EnvolverPipe } from './shared/pipes/envolver.pipe';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [EnvolverPipe, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Ejemplo CRUD de libros';

  constructor(private router: Router){
    console.log("Constructor de AppComponent");
  }

  irAgregar(){
    this.router.navigate(['agregar']);
  }
}
