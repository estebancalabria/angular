import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticiasBuffer : any[] = [
    { titulo : "Angular en la escuela primaria", contenido : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium odit at, totam molestiae aut, a ratione pariatur optio itaque minima nemo eligendi quia excepturi debitis sunt? Voluptatibus, voluptatem veritatis?"},
    { titulo : "El gobierno de EEUU usa Angular", contenido : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium odit at, totam molestiae aut, a ratione pariatur optio itaque minima nemo eligendi quia excepturi debitis sunt? Voluptatibus, voluptatem veritatis?"},
    { titulo : "Angular premio al mejor framework", contenido : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium odit at, totam molestiae aut, a ratione pariatur optio itaque minima nemo eligendi quia excepturi debitis sunt? Voluptatibus, voluptatem veritatis?"},
    { titulo : "Angular salva a un gatito del arbol", contenido : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium odit at, totam molestiae aut, a ratione pariatur optio itaque minima nemo eligendi quia excepturi debitis sunt? Voluptatibus, voluptatem veritatis?"},
  ];
  noticias : any[] = [];

  constructor() { 

  }

  ngOnInit(): void {

    let noticia = this.noticiasBuffer.length;
    let idInterval =  setInterval(()=>{
       if (noticia===0){
           clearInterval(idInterval);
       }else{
          noticia--;
          this.noticias = this.noticiasBuffer.slice(noticia,this.noticiasBuffer.length);
       }
    },2000);
  }

}
