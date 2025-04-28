import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CryptoModel } from '../models/crypto.model';
import { CryptoServiceInterface } from './crypto.service.interface';

@Injectable({
  providedIn: 'root'
})
export class CryptoService extends CryptoServiceInterface {
  public getAll():Observable<CryptoModel[]>{
    return new Observable( (observer:Observer<CryptoModel[]>)=>{       
        setTimeout(()=>{
          //llamo al subscribe
          observer.next([
            new CryptoModel("EDIT","EDIT", "EducacioIT Coin","https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", 100),
            new CryptoModel("GTC","GTC", "Gato Coin","https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", 100),
            new CryptoModel("ANG","Angular Coin", "EducacioIT Coin","https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", 100),
          ]);  
        },1000);
    });
  }
}
