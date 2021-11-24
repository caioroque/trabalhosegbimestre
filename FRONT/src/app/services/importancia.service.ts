import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Importancia } from "../models/importancia";

@Injectable({
    providedIn: "root",
})
export class ImportanciaService {
    private baseURL = "http://localhost:5000/api/importancia";

    constructor(private http: HttpClient) {}

    list(): Observable<Importancia[]> {
        return this.http.get<Importancia[]>(`${this.baseURL}/list`);
    }
}
