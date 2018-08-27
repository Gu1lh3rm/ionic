import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  private key         = "<api_key aqui>";
  private api_key     = "?api_key=";
  private movie       = "/movie"
  private latest      = "/latest";
  private popular     = "/popular"
  
  constructor(public http: Http) {
    
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + this.movie + this.popular + this.api_key + this.key);
  }


}
