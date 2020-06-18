import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../models/movie.model';
import {UpcomingMoviesModel} from '../models/upcoming-movies.model';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies = this.moviesService.getFavorites();
    this.moviesService.favoritesUpdated.subscribe(
      (ms: Movie[]) => {
        this.movies = ms.map(
          (movie) => {
            movie.favorite = !!this.moviesService.isFavorite(movie);
            return movie;
        });
      }
    );
  }

}
