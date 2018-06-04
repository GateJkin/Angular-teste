import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface dos items recebidos pela API
export interface Item {
   nm_autor: string;
   nm_titulo: string;
   ds_publicacao: string;
}

@Injectable()
// Classe que permite a comunicação com a API
export class ApiService {

  // É passado um objeto HttpClient que será utilizado para fazer
  // requisições http.
  constructor(private http: HttpClient) {}

  // Função que retorna um array de objetos com a interface
  // 'Item', que contém os dados.
  getDataApi() {
    return this.http.get<Item[]>('http://127.0.0.1:3001/get');
  }

  // Função que manda um novo cadastro para a API
  // e recebe um booleano como confirmação.
  postDataApi(obj) {
    return this.http.post('http://127.0.0.1:3001/post', obj);
  }

  // Função que manda um objeto com o nome do autor a ser procurado no banco
  // e retorna um array de objetos com a interface 'Item' com o resultado da pesquisa.
  getDataSearchedApi(obj) {
    return this.http.post<Item[]>('http://127.0.0.1:3001/search', obj);
  }

}
