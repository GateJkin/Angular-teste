import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

// Componente que através da API, realiza o cadastro de uma nova publicação
export class AddComponent implements OnInit {

  // Variáveis que irão receber os valores dos campos de texto.
  nm_titulo = "";
  ds_publicacao = "";
  nm_autor = "";

  // É passado como parâmetro o objeto que acessa a API
  constructor(private api: ApiService) { }

  // Função que é chamada quando o componente é carregado
  ngOnInit() {}

  /* Função executado quando o botão de enviar for pressionado.
   * Ela chama o método 'postDataApi' do serviço e cria um objeto
   * com as variáveis locais da classe para ser enviado à API.
   * O método 'subscribe' recebe um booleano confirmando se o
   * cadastro da publicação foi efetudo com sucesso e informa
   * ao usuário.
   */
  postData() {
    this.api.postDataApi({

      nm_titulo: this.nm_titulo,
      ds_publicacao: this.ds_publicacao,
      nm_autor: this.nm_autor

    }).subscribe(

      (res) => {

        if(res === true) {
          this.nm_titulo = "";
          this.ds_publicacao = "";
          this.nm_autor = "";
          alert("publição adicionada");
        }

        else {
          alert("não foi possivel adicionar a publicação");
        }

      },

      (error) => {
        console.log('error: ' + error);
      }

    );
  }

}
