import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../environments/environment';
import {UpcomingMoviesModel} from '../app/models/upcoming-movies.model';
// import {Movie} from '../app/models/movie.model'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    mode: 'no-cors',
  };

  baseURL = environment.baseApiURL;
  apiKey = environment.apiKey;
  // baseImg = environment.baseImageURL;

  constructor(private http: HttpClient) { }

  getUpcomingMovies(): Observable<UpcomingMoviesModel> {
    return this.http.get< UpcomingMoviesModel >(
      `${this.baseURL}movie/upcoming?api_key=${this.apiKey}`
    );
  }
}
