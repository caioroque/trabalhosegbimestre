import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compromisso } from 'src/app/models/compromisso';
import { CompromissoService } from 'src/app/services/compromisso.service';

@Component({
  selector: 'app-ver-compromisso',
  templateUrl: './ver-compromisso.component.html',
  styleUrls: ['./ver-compromisso.component.css']
})
export class VerCompromissoComponent implements OnInit {
  id!: Number;
  compromisso!: Compromisso[];
  compromissoId!: number;
  fonteDados: Compromisso[] = [];
  colunasExibidas: String[] = [
      "id",
      "nome",
      "descricao",
      "importancia",
      //"alterar",
  ];

  constructor(
    private service: CompromissoService,
    private router: Router) {}

  ngOnInit(): void {
      this.service.list().subscribe((compromisso) => {
          this.fonteDados = compromisso;
      });

     /* this.service.getbyid(this.id).subscribe((compromisso) => {
        this.compromisso = compromisso;
        console.table(compromisso);
    });*/
  }

  /*deletar() {
    this.service.delete(this.compromisso).subscribe(() => {
    console.log(`${this.compromissoId} Deletado`);
    this.router.navigate(["compromisso/listar"])
 });
 }*/
}
