import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  /* RouterModule importa un monton de cosas y entre ellas RouterLink */
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segundo-proyecto';

  constructor(private http  : HttpClient){
    
  }

  probarGet(){
    this.http.get("http://localhost:3000/contactos").subscribe({
      next : (data) => {
        alert(JSON.stringify(data));
      }
    })
  }
}
