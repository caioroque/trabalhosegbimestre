import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Compromisso } from "src/app/models/compromisso";

@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
    compromisso!: Compromisso[];

    constructor(
        private router: Router
    ) {}

    ngOnInit(): void {
    }

    login(): void {
        this.router.navigate(["/usuario/login"]);
    }
    cadastrar(): void {
        this.router.navigate(["/usuario/cadastrar-usuario"]);
    }
}
