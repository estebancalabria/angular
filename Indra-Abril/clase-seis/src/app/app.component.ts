import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatTabsModule} from '@angular/material/tabs';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    RouterLink,
    RouterLinkActive,
    CommonModule, 
    MatToolbarModule,
    MatGridListModule, 
    MatTabsModule, 
    MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase-seis';
}


