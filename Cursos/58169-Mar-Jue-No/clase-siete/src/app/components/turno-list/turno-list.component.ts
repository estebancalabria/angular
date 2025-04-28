import { Component, OnInit } from '@angular/core';
import { TurnoModel } from 'src/app/models/turno.model';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-turno-list',
  templateUrl: './turno-list.component.html',
  styleUrls: ['./turno-list.component.css']
})
export class TurnoListComponent implements OnInit {

  turnos : TurnoModel[] = [];

  constructor(private service:TurnoService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((resp:TurnoModel[])=>{
      this.turnos = resp;
    })
  }

}
