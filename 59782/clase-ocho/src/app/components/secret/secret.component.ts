import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  tareas : any[] = [];

  constructor(private service : TareaService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((resp:any[])=>{
      this.tareas= resp;
    });
  }

}
