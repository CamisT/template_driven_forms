import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private dialog: MatDialog) {}

  nome: string = ''
  sobrenome: string = ''
  username: string = ''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''
  complemento: string = ''
  senha: string = ''
  confirmarsenha: string = ''



  submit() {
    console.log(`O nome é: ${this.nome}`)
    console.log(`O sobrenome é: ${this.sobrenome}`)
    console.log(`O username é: ${this.username}`)
    console.log(`O cpf é: ${this.cpf}`)
    console.log(`O telefone é: ${this.telefone}`)
    console.log(`O endereço é: ${this.endereco}`)
    console.log(`O complemento é: ${this.complemento}`)
    console.log(`A senha é: ${this.senha}`)

    let ref = this.dialog.open(DialogComponent)
    
    ref.componentInstance.nome = this.nome
    ref.componentInstance.sobrenome = this.sobrenome
    ref.componentInstance.username = this.username
    ref.componentInstance.cpf = this.cpf
    ref.componentInstance.telefone = this.telefone
    ref.componentInstance.endereco = this.endereco

  }

  validarSenha(v1: any, v2: any): boolean {

    return !(v1 === v2)

  }
  

}
