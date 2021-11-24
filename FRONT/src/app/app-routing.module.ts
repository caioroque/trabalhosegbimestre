import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./components/views/home/index/index.component";
import { CadastrarCompromissoComponent } from "./components/views/produto/cadastrar-produto/cadastrar-produto.component";
import { ListarcompromissoComponent } from "./components/views/produto/listar-produto/listar-compromisso.component";


const routes: Routes = [
    {
        path: "",
        component: IndexComponent,
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
