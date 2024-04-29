import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoFormComponent } from './demo-form/demo-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'strong-type-demo';
}
