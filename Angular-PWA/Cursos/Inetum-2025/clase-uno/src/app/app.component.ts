import { DatePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, UpperCasePipe, SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo: string = "Bienvenidos a mi primera aplicacion de Angular";
  fecha: Date = new Date();
  inicio: number = 0;
  fin: number = 1;
  bootstrapTitleClass = "alert alert-primary";

  constructor() {
    setInterval(() => {
      this.fin++;
      if (this.fin > this.titulo.length) {
        this.fin = 1;
      }
    }, 300)
  }

  cambiarColor() {
    this.bootstrapTitleClass = (this.bootstrapTitleClass === "alert alert-primary") ? "alert alert-danger" : "alert alert-primary";
  }
}
