import { Component, ViewChild, ViewChildren } from '@angular/core';
import { FichaPersonajeComponent } from './components/ficha-personaje/ficha-personaje.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase-siete';

  //@ViewChild(FichaPersonajeComponent)
  //ficha! : FichaPersonajeComponent;

  @ViewChildren(FichaPersonajeComponent)
  fichas!:FichaPersonajeComponent[]

  recibiEventoAtaque(dmg:number){
    //this.ficha.atacar(dmg);
    for (let ficha of this.fichas){
      ficha.atacar(dmg);
    }

  }
  
}
