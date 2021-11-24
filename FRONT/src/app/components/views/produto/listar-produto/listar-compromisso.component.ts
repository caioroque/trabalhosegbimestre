import { Component, OnInit } from "@angular/core";
import { Compromisso } from "src/app/models/compromisso";
import { CompromissoService } from "src/app/services/compromisso.service";


@Component({
    selector: "app-listar-compromisso",
    templateUrl: "./listar-compromisso.component.html",
    styleUrls: ["./listar-compromisso.component.css"],
})
export class ListarcompromissoComponent implements OnInit {
    fonteDados: Compromisso[] = [];
    colunasExibidas: String[] = [
        "id",
        "nome",
        "descricao",
        "importancia",
    ];

    constructor(private service: CompromissoService) {}

    ngOnInit(): void {
        this.service.list().subscribe((compromisso) => {
            this.fonteDados = compromisso;
        });
    }
}
