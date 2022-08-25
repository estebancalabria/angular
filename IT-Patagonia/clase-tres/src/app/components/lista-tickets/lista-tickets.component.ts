import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-lista-tickets',
  templateUrl: './lista-tickets.component.html',
  styleUrls: ['./lista-tickets.component.css']
})
export class ListaTicketsComponent implements OnInit {

  tickets : TicketModel[] = [
    new TicketModel(new Date(),"Hackear el Alumni bien"),
    new TicketModel(new Date(),"Rendir examenes en el alumni"),
    new TicketModel(new Date(),"Comprar Ibuprofeno"),
    new TicketModel(new Date(),"Reunion con Sede Central")
  ]

  constructor() { }

  ngOnInit(): void {
  }

  eliminarTicket(id:number){
    this.tickets = this.tickets.filter(t => t.id !== id);
  }

  agregarTarea(nombre:string){
    if (nombre.length>0){
      let ticketNuevo = new TicketModel(new Date(), nombre);
      this.tickets = [ticketNuevo, ...this.tickets];
    }
  }

  nombreTareaNueva:string = "";
  otraFormaAgregarTarea(){
    if (this.nombreTareaNueva.length>0){
      let ticketNuevo = new TicketModel(new Date(), this.nombreTareaNueva);
      this.tickets.unshift(ticketNuevo);
    }
  }  
  onInputChange(evt:any){
    this.nombreTareaNueva = evt.target.value;
  }

}
