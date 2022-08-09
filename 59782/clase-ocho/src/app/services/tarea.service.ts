import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = "http://localhost:3000/440/tareas";

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor( private http:HttpClient) { }

  getAll():Observable<any[]>{
    let token = localStorage.getItem("token")
    return this.http.get<any[]>(URL, {
      headers : {Authorization : "Bearer " + token}
    })
  }
}
