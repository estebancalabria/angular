import { Component, OnInit } from '@angular/core';
import { Rutas } from './utils/rutas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  rutas = Rutas;
  angulo = 0;

  ngOnInit(): void {
    setInterval(()=>{ this.angulo++}, 10);
  }
}
