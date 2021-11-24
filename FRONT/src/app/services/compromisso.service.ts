import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Compromisso } from "../models/Compromisso";

@Injectable({
    providedIn: "root",
})
export class CompromissoService {
    private baseURL = "http://localhost:5000/api/compromisso";

    constructor(private http: HttpClient) {}

    list(): Observable<Compromisso[]> {
        return this.http.get<Compromisso[]>(`${this.baseURL}/list`);
    }

    create(compromisso: Compromisso): Observable<Compromisso> {
        return this.http.post<Compromisso>(`${this.baseURL}/create`, compromisso);
    }
}
