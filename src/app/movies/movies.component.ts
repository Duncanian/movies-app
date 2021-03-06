import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../models/movie.model';
import {UpcomingMoviesModel} from '../models/upcoming-movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getUpcomingMovies().subscribe(
      (response: UpcomingMoviesModel) => {
        this.movies = response.results.map(
          (movie: Movie) => {
            movie.favorite = !!this.moviesService.isMyFavorite(movie);
            return movie;
        });
        this.moviesService.sortMovies(response.results);
    });
  }
}
