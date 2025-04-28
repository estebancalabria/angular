import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(
    private authService:AuthService,
    private formsBuilder : FormBuilder,
    private router:Router) { 
      this.form = formsBuilder.nonNullable.group({
        email : ["", Validators.required],
        password : ["", Validators.required]
      })
    }

  ngOnInit(): void {
  }

  login(){
      this.authService.login(this.form.get("email")!.value, 
        this.form.get("password")!.value).subscribe((resp)=>{
          this.router.navigate(["secret"]);
        }, (err)=>{
          alert("Error de Autenticacion");
          this.form.reset();
        })
  }

}
