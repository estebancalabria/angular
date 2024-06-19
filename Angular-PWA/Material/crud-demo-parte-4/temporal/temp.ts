import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.css']
})
export class AgregarContactoComponent implements OnInit {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder, private contactoService: ContactoService) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactoForm.valid) {
      this.contactoService.agregarContacto(this.contactoForm.value).subscribe(response => {
        console.log('Contacto agregado:', response);
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
