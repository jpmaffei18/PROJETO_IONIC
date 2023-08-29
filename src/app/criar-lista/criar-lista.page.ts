import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
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
    produto: "",
    quantidade: ""
};

  constructor(
    private http:HttpClient,
  ) {}
  
  ngOnInit(): void {

    this.http.get<Lista[]>('http://localhost:3000/lista').subscribe(results => this.meusProdutos = results );
  }

  cadastro(form:any){
    this.http.post('http://localhost:3000/lista/', form.value, this.httpOptions).subscribe();
    setTimeout(this.refresh, 1000) 
  }


  deletar(id:any){
    this.http.delete('http://localhost:3000/lista/' + id).subscribe();
    // Definir 2 segundos para atualizar a página
    setTimeout(this.refresh, 1000) 
  }

  // Método de refresh

refresh(){
  // Função JS - Atualiza a página
  location.reload();
}

}
