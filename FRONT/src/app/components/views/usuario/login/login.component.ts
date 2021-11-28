import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //form!: FormGroup;
  id!: number; 
  usuarios: Usuario[] = [];
  email!: string;
  senhas!: string;
  permissao!: string;

  constructor(
    private router: Router,
    private usuario: UsuarioService
  ){}

  ngOnInit() {
  this.usuario.list().subscribe((usuario) => {
    this.usuarios = usuario;
    console.table(usuario);
});
}

  login() {
    let usuarios: Usuario = {
      id: this.id,
      email: this.email,
      senha: this.senhas,
      //permissao: this.permissao = "user",
  };
    //const val = this.form.value;
    if (usuarios.email == this.email && usuarios.senha == this.senhas) {
      this.usuario.login(this.email, this.senhas)
            .subscribe(
                () => {
                    console.log("User is logged in");
                    this.router.navigateByUrl('compromisso/listar');
                }
            );
    }else{console.log("Não logado");
    this.router.navigateByUrl('usuario/cadastrar-usuario');}
  }
}
