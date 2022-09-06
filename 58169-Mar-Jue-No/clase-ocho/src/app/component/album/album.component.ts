import { Component, OnInit } from '@angular/core';
import { FiguritaModel } from 'src/app/models/figurita.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  figus : FiguritaModel[] = [];

  constructor(private service : AlbumService) { }

  ngOnInit(): void {
    this.service.getFigus().subscribe((resp:FiguritaModel[])=>{
      this.figus = resp;
    })
  }

}
