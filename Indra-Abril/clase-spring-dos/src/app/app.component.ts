import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculaService } from './services/pelicula.service';
import { catchError } from 'rxjs';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { AgregarPeliculaComponent } from './components/agregar-pelicula/agregar-pelicula.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     ListadoPeliculasComponent, 
     AgregarPeliculaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase-spring-dos';

  //Inyeccion de dependencia por constructor
  constructor(private service: PeliculaService) { }

  mandarPeli() {

   /* this.service.addPelicula({ nombre: "", genero: "Comedia" })
      .subscribe({
        next: (data: string) => { alert("Pelicula agregada") },
        error: (res: any) => { alert(res.error.message) }
      });*/

    /*this.service.addPelicula({ nombre: "", genero: "Comedia" })
      .subscribe((data: string) => {
        alert("Pelicula agregada");
      },
        (res: any) => { alert(res.error.message) });*/
  }
}
