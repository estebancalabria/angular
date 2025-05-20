import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ServerStatusInterfaceService {
  abstract getVisitas():Observable<number>;
  abstract getHoraServer():Observable<string>;
}
