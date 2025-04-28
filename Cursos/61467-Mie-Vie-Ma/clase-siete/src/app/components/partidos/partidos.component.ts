import { Component, OnInit } from '@angular/core';
import PartidoModel from 'src/app/models/partido.model';
import { PartidoService } from 'src/app/services/partido.service';
import getCountryISO2 from "src/app/utils/intl-utils";


@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidos : PartidoModel[] = [];

  constructor(private service : PartidoService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((resp:PartidoModel[])=>{
      this.partidos = resp;
    })
  }

  getFlagUrl(code:string){
    return 'https://purecatamphetamine.github.io/country-flag-icons/3x2/'+getCountryISO2(code)+'.svg';
  }

}
