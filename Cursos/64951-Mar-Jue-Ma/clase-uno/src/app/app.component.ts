import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje : string;
  subtitulo : string;
  fecha : Date;
  visitas: number;
  color:string = "red";
  //numeros : number = "Hola"; Daria un error

  constructor(){
      this.mensaje = "Bienvenidos a Angular";
      this.subtitulo = "El mejor framework de frontend"
      this.fecha = new Date();
      this.visitas = 100;

      setInterval(()=>{
        this.visitas++;
      }, 3000);
  }
}
