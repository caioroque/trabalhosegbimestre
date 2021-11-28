import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";

@Injectable({
    providedIn: "root",
})
export class UsuarioService {
    private baseURL = "http://localhost:5000/api/usuario";

    constructor(private http: HttpClient) {}

    list(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.baseURL}/list`);
    }
    getbyid(id: Number): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.baseURL}/getbyid`+'/'+id);
    }

    loginn(usuario: Usuario): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.baseURL}/login`);
    }

    create(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${this.baseURL}/create`, usuario);
    }

    uptade(usuario: Usuario): Observable<any> {
        return this.http.put(`${this.baseURL}/update`, usuario);
    }

    delete(id: Number): Observable<void> {
        return this.http.delete<void>(`${this.baseURL}/deleteById` +'/'+id);
    }

    login(email:string, senha:string ) {
        return this.http.post<Usuario>(`${this.baseURL}/login`, {email, senha})
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
            //.shareReplay();
    }
}
