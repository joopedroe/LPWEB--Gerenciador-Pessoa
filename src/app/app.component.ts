import { Component } from '@angular/core';
import {Pessoa} from './models/Pessoa'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomePessoa=null;
  idadePessoa=null;
  id=0;
  menorIdade:0;
  maiorIdade:0;
  
  title = 'gerenciarPessoa';
  pessoa:Pessoa=new Pessoa();
  menorPessoa:null;
  maiorPessoa:null;

  pessoas:Pessoa[]=[

  ]

  calculaIdade(idadeEntrada,pessoaEntrada){
    if (this.id == 0){
      this.menorIdade=idadeEntrada;
      this.maiorIdade=idadeEntrada;
      this.menorPessoa=this.maiorPessoa=pessoaEntrada;
    }
    else{
      if (idadeEntrada<this.menorIdade){
        this.menorPessoa=pessoaEntrada;
        this.menorIdade=idadeEntrada;
      }
      if(idadeEntrada>this.maiorIdade){
        this.maiorPessoa=pessoaEntrada;
        this.maiorIdade=idadeEntrada;
      }
    }
  }

  adicionar(){
    this.pessoas.push({id:this.id,nome:this.nomePessoa,idade:this.idadePessoa});
    this.calculaIdade(this.idadePessoa,this.nomePessoa);
    this.nomePessoa = null;
    this.idadePessoa=null;
    this.id+=1;
    console.log(this.pessoas);
  }


  excluir(idExcluir){
    this.pessoas.splice(idExcluir,1);
  }
}
