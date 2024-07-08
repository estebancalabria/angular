import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  mensajeLogin : string = "";

  constructor(private fb: FormBuilder, 
    private service : AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      //const loginData = this.loginForm.value;
      //console.log('Login exitoso', loginData);
      // Aquí puedes agregar la lógica para enviar los datos al servidor
      this.service.login(this.loginForm.value.email, this.loginForm.value.password);
      this.mensajeLogin = "Login Falido";
    }
  }
}
