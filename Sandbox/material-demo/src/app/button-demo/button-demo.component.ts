import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [MatCommonModule, MatIconModule, MatButtonModule],
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.css'
})
export class ButtonDemoComponent {
  

}
