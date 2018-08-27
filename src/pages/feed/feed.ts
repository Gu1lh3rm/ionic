import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MovieProvider
  ) {
  }

  public lista_filmes = Array<any>();

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(data => {
      //Converte porque o parametro está esperando um tipo response e não contem a propriedade _body então é feito um cast
      //console.log((data as any)._body); 
      /*
      * # const response = (data as any); 
      *   # - Transforma a resposta data em um objeto de qualquer tipo, 
      *       pra que seja possível pegar o valor de qualquer forma mesmo o método sendo privado,
      *       com isso é possível pegar a propriedade privada _body que não está disponível na assinatura publica do método
      * # const objeto_retorno = JSON.parse(response._body);
      *   # - É para transformar o valor texto em um objeto JSON porque o Angular tem uma tratativa que faz
      *       o objeto virar texto porque ele trabalha com vários tipos de arquivos, 
      *       então é preciso converte-lo novamente        
      */

      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      this.lista_filmes = objeto_retorno.results;
      console.log(this.lista_filmes);
      return this.lista_filmes;
      
    },error => {
      console.log(error);
    });
  }

}
