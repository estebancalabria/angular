import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-atacar-personaje',
  templateUrl: './atacar-personaje.component.html',
  styleUrls: ['./atacar-personaje.component.css']
})
export class AtacarPersonajeComponent implements OnInit {

  @Output() eventoAtaque : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickBoton(){
    let damage : number = Math.round(Math.random() * 100);
    this.eventoAtaque.emit(damage);
  }

}
