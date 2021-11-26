import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./components/views/home/index/index.component";
import { CadastrarCompromissoComponent } from "./components/views/compromisso/cadastrar-compromisso/cadastrar-compromisso.component";
import { ListarcompromissoComponent } from "./components/views/compromisso/listar-compromisso/listar-compromisso.component";
import { AlterarCompromissoComponent } from "./components/views/compromisso/alterar-compromisso/alterar-compromisso.component";
import { VerCompromissoComponent } from "./components/views/compromisso/ver-compromisso/ver-compromisso.component";
import { DeleteCompromissoComponent } from "./components/views/compromisso/delete-compromisso/delete-compromisso.component";


const routes: Routes = [
    {
        path: "",
        component: IndexComponent,
    },
    {
        path: "compromisso/ver-compromisso",
        component: VerCompromissoComponent,
    },
    {
        path: "compromisso/deletar",
        component: DeleteCompromissoComponent,
    },
    {
        path: "compromisso/alterar",
        component: AlterarCompromissoComponent,
    },
    {
        path: "compromisso/listar",
        component: ListarcompromissoComponent,
    },
    {
        path: "compromisso/cadastrar",
        component: CadastrarCompromissoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
