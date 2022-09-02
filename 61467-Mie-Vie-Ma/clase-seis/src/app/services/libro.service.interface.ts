import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LibroModel } from "../modelo/libro.model";

@Injectable()
export abstract class LibroServiceInterface{
    abstract getAll():Observable<LibroModel[]>;
}