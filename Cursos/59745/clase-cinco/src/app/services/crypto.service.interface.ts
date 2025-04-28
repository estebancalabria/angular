import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoModel } from '../models/crypto.model';

@Injectable({
    providedIn: 'root'
})
export abstract class CryptoServiceInterface {
    public abstract getAll(): Observable<CryptoModel[]>;
}