import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FiguritaModel } from 'src/app/models/figurita.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-figurita',
  templateUrl: './figurita.component.html',
  styleUrls: ['./figurita.component.css']
})
export class FiguritaComponent implements OnInit {

  form : FormGroup;
  figu : FiguritaModel = new FiguritaModel(0,"","",0,"");
  paises = ["Argentina","España","Francia","Portugal", "Brasil"];

  constructor(private service:AlbumService, 
    private builder : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private router :Router) {
    this.form = builder.group<FiguritaModel>(this.figu);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any)=>{
      let id = params.id;
      this.service.getFig(id).subscribe((resp:FiguritaModel)=>{
        this.figu = resp;        
        this.form.patchValue(resp);
      })
    })
  }

  get f():{ [P in keyof FiguritaModel] : string}{
    let res = {id:"id",nombre:"nombre", pais:"pais", dorsal:"dorsal", imagen:"imagen"} 
    //as { [P in keyof FiguritaModel] : P }
    //alert(JSON.stringify(res));
    return res;
    
  }

  submit(){
    this.service.actualizar(this.form.value).subscribe(()=>{
      this.router.navigate([""]);
    })
  }

}
