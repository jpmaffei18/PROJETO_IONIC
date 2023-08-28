import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Lista } from '../model/lista.model';

@Component({
  selector: 'app-criar-lista',
  templateUrl: './criar-lista.page.html',
  styleUrls: ['./criar-lista.page.scss'],
})
export class CriarListaPage{

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  meusProdutos:Lista[] = [];

  nameButton = "Adicionar";
  dados = {
    id: "",
    produto: ""
};

  constructor(
    private lista:HttpClient,
  ) {}

  ngOnInit(): void {
    this.lista.get<Lista[]>('http://localhost:3000/lista').subscribe(results => this.meusProdutos = results );
  }

  cadastro(form:any){
    this.lista.post('http://localhost:3000/lista/', form.value, this.httpOptions).subscribe();
  }

}
