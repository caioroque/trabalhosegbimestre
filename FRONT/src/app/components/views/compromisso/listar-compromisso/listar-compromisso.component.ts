import { Usuario } from 'src/app/models/usuario';
import { Component, OnInit } from '@angular/core';
import { Compromisso } from 'src/app/models/compromisso';
import { CompromissoService } from 'src/app/services/compromisso.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-compromisso',
  templateUrl: './listar-compromisso.component.html',
  styleUrls: ['./listar-compromisso.component.css']
})
export class ListarcompromissoComponent implements OnInit {
  usuario: Usuario[] = [];
  fonteDados: Compromisso[] = [];
  colunasExibidas: String[] = [
      "id",
      "nome",
      "descricao",
      "importancia",
      "vercompromisso",
  ];

  constructor(
    private service: CompromissoService,
    private usuarioService: UsuarioService,) {}

  ngOnInit(): void {
      this.service.list().subscribe((compromisso) => {
          this.fonteDados = compromisso;
      });

      this.usuarioService.list().subscribe((usuario) => {
        this.usuario = usuario;
        console.table(usuario);
    });
  }
}

