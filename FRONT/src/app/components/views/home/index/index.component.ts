import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemVenda } from "src/app/models/item-venda";
import { Compromisso } from "src/app/models/compromisso";
import { ItemVendaService } from "src/app/services/item-venda.service";
import { CompromissoService } from "src/app/services/compromisso.service";

@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
    compromisso!: Compromisso[];

    constructor(
        private compromissoService: CompromissoService,
        private itemService: ItemVendaService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.compromissoService.list().subscribe((compromissos) => {
            this.compromisso = compromissos;
        });
    }

    adicionar(compromissos: Compromisso): void {
        let item: ItemVenda = {
            compromisso: compromissos,
            compromissosId: compromissos.id!,
            quantidade: 1,
            carrinhoId: localStorage.getItem("carrinhoId")! || "",
        };
        this.itemService.create(item).subscribe((item) => {
            localStorage.setItem("carrinhoId", item.carrinhoId!);
            this.router.navigate(["/venda/carrinho"]);
        });
    }
}
