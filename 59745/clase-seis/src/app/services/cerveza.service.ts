import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CervezaModel } from '../models/cerveza.model';

@Injectable({
  providedIn: 'root'
})
export class CervezaService {

  URL = "http://localhost:3000/cervezas";

  constructor(private http:HttpClient) { }

  public add(cerveza:CervezaModel):Observable<any>{
     return this.http.post(this.URL, cerveza);
  }

}
