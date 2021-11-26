import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compromisso } from 'src/app/models/compromisso';
import { Importancia } from 'src/app/models/importancia';
import { CompromissoService } from 'src/app/services/compromisso.service';
import { ImportanciaService } from 'src/app/services/importancia.service';

@Component({
  selector: 'app-alterar-compromisso',
  templateUrl: './alterar-compromisso.component.html',
  styleUrls: ['./alterar-compromisso.component.css']
})
export class AlterarCompromissoComponent implements OnInit {
  id!: number; 
  nome!: string;
  descricao!: string;
  importancia!: Importancia[];
  importanciaId!: number;
  compromissos!: Compromisso[];
  compromissoId!: Number;

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

      this.compromissoService.list().subscribe((compromisso) => {
        this.compromissos = compromisso;
        console.table(compromisso);
    });
  }

  alterar(): void {
      let compromisso: Compromisso = {
          id: this.id,
          nome: this.nome,
          descricao: this.descricao,
          importanciaId: this.importanciaId,
      };
      if(compromisso.id == this.id){
      this.compromissoService.uptade(compromisso).subscribe((compromisso) => {
          this.router.navigate(["compromisso/listar"]);
      });
    }
  }
}
