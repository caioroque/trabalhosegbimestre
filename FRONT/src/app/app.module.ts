import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import {MatGridListModule} from '@angular/material/grid-list';
// Imports dos componentes internos
import { AppComponent } from "./app.component";
import { TemplateComponent } from "./components/template/template.component";
import { IndexComponent } from './components/views/home/index/index.component';
import { CadastrarCompromissoComponent } from "./components/views/compromisso/cadastrar-compromisso/cadastrar-compromisso.component";
import { ListarcompromissoComponent } from "./components/views/compromisso/listar-compromisso/listar-compromisso.component";
import { AlterarCompromissoComponent } from './components/views/compromisso/alterar-compromisso/alterar-compromisso.component';





@NgModule({
    declarations: [
        AppComponent,
        CadastrarCompromissoComponent,
        ListarcompromissoComponent,
        TemplateComponent,
        IndexComponent,
        AlterarCompromissoComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatGridListModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
