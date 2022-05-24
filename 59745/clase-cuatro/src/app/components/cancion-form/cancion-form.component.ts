import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CancionModel } from 'src/app/models/cancion.model';
import { NotTodayValidatorDirective } from 'src/app/utils/not-today-validator-directive';

@Component({
  selector: 'app-cancion-form',
  templateUrl: './cancion-form.component.html',
  styleUrls: ['./cancion-form.component.css']
})
export class CancionFormComponent implements OnInit {

  public modelo : CancionModel = new CancionModel(1, "Enter Sandman", "Metallica", 3330, new Date(1991,6,1));

  constructor() { }

  ngOnInit(): void {
    //var pepe:NgModel;
    //pepe.errors
  }

  onSubmit(){
    alert(JSON.stringify(this.modelo));
  }

}
