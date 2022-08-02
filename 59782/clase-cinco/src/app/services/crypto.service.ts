import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoModel } from '../models/crypto.model';

const URL = "http://localhost:3000/cryptos";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http:HttpClient) { }

  getAll():Observable<CryptoModel[]>{
    return this.http.get<CryptoModel[]>(URL);
  }
}
