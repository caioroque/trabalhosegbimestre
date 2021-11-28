import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  email!: string;
  senha!: string;
  permissao!: string;

  constructor(
      private usuarioService: UsuarioService,
      private router: Router
  ) {}

  ngOnInit(): void {
  }

  cadastrar(): void {
      let usuario: Usuario = {
          email: this.email,
          senha: this.senha,
          permissao: this.permissao = "user",

      };
      this.usuarioService.create(usuario).subscribe((usuario) => {
          this.router.navigate(["usuario/login"]);
      });
  }
}
