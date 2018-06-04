import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-procurar',
  templateUrl: './procurar.component.html',
  styleUrls: ['./procurar.component.css']
})

// Componente que realiza procura de publicações pelo nome do autor na API
export class ProcurarComponent implements OnInit {

  // Array de items retornados pela API
  items = [];
  // string que contém os dados do campo de texto
  search_string = "";

  // É passado como parâmetro o objeto que acessa a API
  constructor(private api: ApiService) {}

  // Função que é chamada quando o componente é carregado
  ngOnInit() {}

  /* Função que é chamada quando o botão de pesquisa representado
   * por uma lupa for acionado. Chama o método 'getDataSearchedApi'
   * do objeto 'api', onde é criado e passado á API um
   * objeto com o nome do autor a ser pesquisado no banco de dados.
   * O método 'subscribe' acessa um array de objeto que foi retornado
   * pela API e passa cada objeto para o array local 'items'.
   */
  submitSearch() {
    this.api.getDataSearchedApi({
      nm_autor: this.search_string
    }).subscribe(
      (data) => {
        this.items = [];
        data.forEach((obj, indice) => {
          this.items.push(obj);
        });
      },

      (error) => console.log('error: ' + error)
    );
  }

}
