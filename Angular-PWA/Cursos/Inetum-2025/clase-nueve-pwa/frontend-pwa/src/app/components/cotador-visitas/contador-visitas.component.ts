import { Component, OnInit } from '@angular/core';
import { ServerStatusInterfaceService } from '../../services/server-status-interface.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador-visitas',
  imports: [CommonModule],
  templateUrl: './contador-visitas.component.html',
  styleUrl: './contador-visitas.component.css'
})
export class ContadorVisitasComponent implements OnInit {

  visitas: number = 0;
  mensaje: string = 'Cargando...';
  

  constructor(private service: ServerStatusInterfaceService) { 
    // Constructor logic here
    
  }

  ngOnInit(): void {
    //Utilizamos manejo de errores con el subscribe
    this.mensaje = 'Cargando...';
    this.service.getVisitas().subscribe({
      next: (visitas) => {
        this.visitas = visitas;
        this.mensaje = '';
      },  
      error: (error) => {
        console.error('Error fetching visitas:', error);
        this.mensaje = 'ERROR';
      }
    });
  }

  // Other component methods and properties can be defined here

}
