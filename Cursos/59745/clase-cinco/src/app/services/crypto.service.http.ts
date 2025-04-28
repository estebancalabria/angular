import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CryptoModel } from '../models/crypto.model';
import { CryptoServiceInterface } from './crypto.service.interface';

@Injectable({
    providedIn: 'root'
})
export class CryptoServiceHttp extends CryptoServiceInterface{
  
    private URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    constructor(public httpClient:HttpClient){
        super();
    }

    public getAll(): Observable<CryptoModel[]> {
        return this.httpClient.get<CryptoModel[]>(this.URL);
    }
}