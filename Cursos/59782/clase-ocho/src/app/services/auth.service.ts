import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

const URL_REGISTER = "http://localhost:3000/register";
const URL_LOGIN  = "http://localhost:3000/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient){

  }

  register(email:string, password:string):Observable<any>{
    return this.http.post(URL_REGISTER, {email, password});
  }

  login(email:string, password:string):Observable<any>{
     return new Observable<any>((obs:Observer<any>)=>{
        this.http.post(URL_LOGIN, {email,password}).subscribe((resp:any)=>{
          localStorage.setItem("token", resp.accessToken);
          obs.next(null);
        },
        (err:any)=>{
          obs.error(err);
        });
     })
  }
}
