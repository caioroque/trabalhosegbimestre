import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compromisso } from 'src/app/models/compromisso';
import { Importancia } from 'src/app/models/importancia';
import { CompromissoService } from 'src/app/services/compromisso.service';
import { ImportanciaService } from 'src/app/services/importancia.service';

@Component({
  selector: 'app-cadastrar-compromisso',
  templateUrl: './cadastrar-compromisso.component.html',
  styleUrls: ['./cadastrar-compromisso.component.css']
})
export class CadastrarCompromissoComponent implements OnInit {
  nome!: string;
  descricao!: string;
  importancia!: Importancia[];
  importanciaId!: number;

  constructor(
      private compromissoService: CompromissoService,
      private importanciaService: ImportanciaService,
      private router: Router
  ) {}

  ngOnInit(): void {
      this.importanciaService.list().subscribe((importancias) => {
          this.importancia = importancias;
          console.table(importancias);
      });
  }

  cadastrar(): void {
      let compromisso: Compromisso = {
          nome: this.nome,
          descricao: this.descricao,
          importanciaId: this.importanciaId,
      };
      this.compromissoService.create(compromisso).subscribe((compromisso) => {
          this.router.navigate(["compromisso/listar"]);
      });
  }
}

