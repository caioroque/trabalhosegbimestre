import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Compromisso } from "../models/compromisso";

@Injectable({
    providedIn: "root",
})
export class CompromissoService {
    private baseURL = "http://localhost:5000/api/compromisso";

    constructor(private http: HttpClient) {}

    list(): Observable<Compromisso[]> {
        return this.http.get<Compromisso[]>(`${this.baseURL}/list`);
    }
    getbyid(id: Number): Observable<Compromisso[]> {
        return this.http.get<Compromisso[]>(`${this.baseURL}/getbyid`+'/'+id);
    }

    create(compromisso: Compromisso): Observable<Compromisso> {
        return this.http.post<Compromisso>(`${this.baseURL}/create`, compromisso);
    }

    uptade(compromisso: Compromisso): Observable<any> {
        return this.http.put(`${this.baseURL}/update`, compromisso);
    }

    delete(id: Number): Observable<void> {
        return this.http.delete<void>(`${this.baseURL}/deleteById` +'/'+id);
    }
}
