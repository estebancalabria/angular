import { Injectable } from '@angular/core';
import { ServerStatusInterfaceService } from './server-status-interface.service';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL_VISITAS = 'http://localhost:3000/api/visitas';
const URL_HORA_SERVER = 'http://localhost:3000/api/hora-server';


@Injectable({
  providedIn: 'root'
})
export class ServerStatusService extends ServerStatusInterfaceService {

  constructor(private http: HttpClient) { 
    super();
  }

  override getVisitas(): Observable<number> {
    return this.http.get<{"contador": number}>(URL_VISITAS).pipe(
      map((response) => response.contador)
    );
  }

  override getHoraServer(): Observable<string> {
    return this.http.get<{"hora":string}>(URL_HORA_SERVER).pipe(
      map((response) => response.hora)
    );
  }
}
