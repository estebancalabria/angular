import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from "@angular/material/card"

@Component({
  selector: 'app-card-demo',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-demo.component.html',
  styleUrl: './card-demo.component.css'
})
export class CardDemoComponent {

}
