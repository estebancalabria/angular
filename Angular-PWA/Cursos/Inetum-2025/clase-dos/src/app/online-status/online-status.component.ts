import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-online-status',
  imports: [],
  templateUrl: './online-status.component.html',
  styleUrl: './online-status.component.css'
})
export class OnlineStatusComponent implements OnInit, OnDestroy {
  //El objeto navigator es parte del BOM (Browser Object Model) y proporciona información sobre el navegador y el sistema operativo del usuario.
  inOnline : boolean = navigator.onLine;

  private onlineHandler = () => { this.inOnline = true; }
  private offlineHandler = () => { this.inOnline = false; }

  //se ejecuta al momento de crear el componente
  constructor(){

  }

  //se ejecuta al momento de inicializar el componente y se muestra en pantalla
  ngOnInit(): void {
    window.addEventListener('online', this.onlineHandler);
    window.addEventListener('offline', this.offlineHandler);
  }

  //se ejecuta al momento de destruir el componente
  ngOnDestroy(): void {
    window.removeEventListener('online', this.onlineHandler);
    window.removeEventListener('offline', this.offlineHandler);
  }

}
