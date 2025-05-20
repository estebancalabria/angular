import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorVisitasComponent } from "./components/cotador-visitas/contador-visitas.component";
import { OnlineStatusComponent } from "./components/online-status/online-status.component";
import { ServerTimeComponent } from "./components/server-time/server-time.component";

@Component({
  selector: 'app-root',
  imports: [ContadorVisitasComponent, OnlineStatusComponent, ServerTimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-pwa';
}
