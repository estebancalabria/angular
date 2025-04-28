import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;

  constructor(
    private authService : AuthService,
    private formsBuilder : FormBuilder,
    private router : Router) { 
      this.form = formsBuilder.nonNullable.group({
        email : ["", Validators.required],
        password : ["", Validators.required]
      })
    }

  ngOnInit(): void {
  }

  registrar(){
    this.authService.register(this.form.get("email")!.value, 
      this.form.get("password")!.value).subscribe((resp)=>{
        this.router.navigate([""]);
      }, 
      (err)=>{
        alert(err);
      })
  }

}
