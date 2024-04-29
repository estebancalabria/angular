import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DemoModel } from '../models/demo.model';
import { typeProps, PropNames } from '../utils/strong-type-props';




@Component({
  selector: 'app-demo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './demo-form.component.html',
  styleUrl: './demo-form.component.css'
})
export class DemoFormComponent {

  form : FormGroup;
  demo : DemoModel;
  campos : PropNames<DemoModel> = typeProps<DemoModel>();

  constructor(private fb:FormBuilder){
    this.demo = { texto :"texto", fecha : new Date(), numero: 123};
    this.form = fb.group(this.demo);
  }
}
