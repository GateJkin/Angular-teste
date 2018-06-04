import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, of } from 'rxjs';

export interface Item {
   nm_autor: string;
   nm_titulo: string;
   ds_publicacao: string;
}

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

// Componente que mostra todos os posts retornados pela API
export class ListarComponent implements OnInit {

  // Array que armazenará todos os objetos retornados da API
  public items = [];

  // É passado como parâmetro o objeto que acessa a API
  constructor(private api: ApiService) {}

  // Função que é chamada quando o componente é carregado
  ngOnInit() {

    /* Chama o método 'getDataApi' do objeto 'api' para receber um array
     * de objetos que foi retornado pela API com as informações a serem
     * mostradas na tela. Dentro do método 'subscribe' é percorrido o
     * array de Objetos, passando cada um ao array local'items'.
     */
    this.api.getDataApi().subscribe(
      (data) => {
        data.forEach((obj, indice) => {
          this.items.push(obj);
        });
      },

      (error) => console.log('error: ' + error)
    );
  }

}
