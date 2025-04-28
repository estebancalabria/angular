import { Component, OnInit } from '@angular/core';
import { RegistroModel } from 'src/app/models/registro.model';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

  modelo : RegistroModel = new RegistroModel("DemoUser", "root1234", new Date(), 12345);

  constructor() { }

  ngOnInit(): void {
  }

}
