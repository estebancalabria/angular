import { Injectable } from "@angular/core";
import { ContactoServiceInterface } from "./contacto.service.interface";
import { Observable } from "rxjs";
import { ContactoModel } from "../models/contacto.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ContactoServiceHttp extends ContactoServiceInterface {

    private url = "http://localhost:3000/contactos"

    constructor(private http: HttpClient) {
        super();
    }

    override getContactos(): Observable<ContactoModel[]> {
       return this.http.get<ContactoModel[]>(this.url);
    }
    override agregar(nuevo: ContactoModel): Observable<any> {
        return this.http.post(this.url, nuevo);
    }
    override eliminar(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }
    

    override modificar(nuevo: ContactoModel): Observable<any> {
        return this.http.put<ContactoModel>(this.url, nuevo);
    }

}