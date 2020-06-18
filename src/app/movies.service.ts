import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../environments/environment';
import {UpcomingMoviesModel} from '../app/models/upcoming-movies.model';
import {Movie} from '../app/models/movie.model';
// import {MovieDetailModel} from '../app/models/movie-details.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: Movie[] = [];
  private favourites: Movie[] = this.movies.filter(
    m => m.favorite === true,
  );

  baseURL = environment.baseApiURL;
  apiKey = environment.apiKey;
  baseImg = environment.baseImageURL;

  constructor(private http: HttpClient) { }

  favoritesUpdated = new EventEmitter<Movie[]>();
  moviesUpdated = new EventEmitter<Movie[]>();
  favoriteWasUpdated = new EventEmitter<Movie>();

  getUpcomingMovies(): Observable<UpcomingMoviesModel> {
    return this.http.get< UpcomingMoviesModel >(
      `${this.baseURL}movie/upcoming?api_key=${this.apiKey}`
    );
  }

  setMovies(movies: Movie[]) {
    if (this.favourites.length > 0) {
        this.favourites.forEach(fav => {
          const movie = movies.find(
    (mov) => {
              return mov.id === fav.id;
            });
          if (movie) { movie.favorite = true; }
      });
    }

    this.movies = movies;
  }

  addMovie(movie: Movie) {
    this.movies.push(...[movie]);
  }


  getFavorites() {
    return this.favourites.slice();
  }

  isFavorite(movie: Movie ) {
    return this.favourites.find(
    (mov) => {
        return mov.id === movie.id;
      }
    );
  }

  toggleFavorite(movie: Movie) {
    // check here first
    if ('genre_ids' in movie && this.movies.length) {
      // get equivalent movie from upcoming list
      const initialFav = movie.favorite;
      movie.favorite = !movie.favorite;
      movie = this.movies.find(mov => {
        return mov.id === movie.id;
      }) || movie;
      movie.favorite = initialFav;
    }
    if (movie.favorite) {
      this.favourites = this.favourites.filter(mov => mov.id !== movie.id);
    } else {
      this.favourites.push(...[movie]);
    }
    movie.favorite = !movie.favorite;
    this.favoriteWasUpdated.emit(movie);
    this.favoritesUpdated.emit(this.favourites.slice());
    this.moviesUpdated.emit(this.movies.slice());
  }

  getImage(path: string, size: string) {
    return this.baseImg + size + path;
  }
}
