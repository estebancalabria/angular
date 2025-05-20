import { Component, OnInit } from '@angular/core';
import { ServerStatusInterfaceService } from '../../services/server-status-interface.service';

@Component({
  selector: 'app-server-time',
  imports: [],
  templateUrl: './server-time.component.html',
  styleUrl: './server-time.component.css'
})
export class ServerTimeComponent implements OnInit {

  time : string = 'No time available';

  constructor(private service: ServerStatusInterfaceService) {
    // Constructor logic here
  }

  ngOnInit(): void {
    //Utilizamos manejo de errores con el subscribe
    this.service.getHoraServer().subscribe({
      next: (time) => {
        this.time = time;
      },
      error: (error) => {
        console.error('Error fetching server time:', error);
        this.time = 'No time available';
      }
    });
  }
}
