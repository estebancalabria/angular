import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-crear-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-contacto.component.html',
  styleUrl: './crear-contacto.component.css'
})
export class CrearContactoComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private service : ContactoService) { 

    this.form = this.fb.group({
      id: [null], // Campo opcional
      documento: [null, [Validators.required, Validators.min(1)]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      fechaDeNacimiento: [null, Validators.required],
    });
  }

  onSubmit(){
    if (this.form.valid) {
      alert(JSON.stringify(this.form.value));
    }
  }

  volver() {
    this.router.navigate([""])
  }

}
