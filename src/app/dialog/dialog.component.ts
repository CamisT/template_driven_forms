import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  nome: string = ''
  sobrenome: string = ''
  username: string = ''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''
  
  

  constructor() { }

  ngOnInit(): void {
  }

}