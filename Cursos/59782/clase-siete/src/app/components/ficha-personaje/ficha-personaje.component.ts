import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonajeModel } from 'src/app/models/personaje.model';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-ficha-personaje',
  templateUrl: './ficha-personaje.component.html',
  styleUrls: ['./ficha-personaje.component.css']
})
export class FichaPersonajeComponent implements OnInit {

  public personaje? : PersonajeModel;
  public form : FormGroup;
  
  @Input()
  public lastdmg:number=0;

  get claves():string[]{
    return Object.keys(this.personaje!);
  }


  constructor(
    private service : PersonajeService,
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.nonNullable.group({
      id : 0, 
      nombre: "",
      raza : "",
      profesion : "",
      puntosDeVida: 0,
      nivel : 1
    })
  }

  getTipo(clave:string):string{
    type ObjectKey = keyof typeof this.personaje;
    let key = clave as ObjectKey;
    return typeof this.personaje![key] === "number" ? "number" : "text"
  }

  ngOnInit(): void {
    this.service.get(1).subscribe((resp:PersonajeModel)=>{
      this.personaje = resp;
      this.form.patchValue(this.personaje);
    });
  }

  atacar(damage:number){
      this.personaje!.puntosDeVida -= damage;
      this.form.patchValue(this.personaje!);
  }

}
