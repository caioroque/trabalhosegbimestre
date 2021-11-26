import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compromisso } from 'src/app/models/compromisso';
import { CompromissoService } from 'src/app/services/compromisso.service';

@Component({
  selector: 'app-delete-compromisso',
  templateUrl: './delete-compromisso.component.html',
  styleUrls: ['./delete-compromisso.component.css']
})
export class DeleteCompromissoComponent implements OnInit {
  id!: Number;
  compromissos!: Compromisso[];
  compromissoId!: Number;
  constructor(
    private compromissoService: CompromissoService,
    private router: Router) { }

  ngOnInit(): void {
    this.compromissoService.list().subscribe((compromisso) => {
      this.compromissos = compromisso;
      console.table(compromisso);
  });
}

deletar(): void {
    this.compromissoService.delete(this.id).subscribe(() => {
      console.log('${this.id} Deletado');
      this.router.navigate(["compromisso/listar"])
    })
}
}
