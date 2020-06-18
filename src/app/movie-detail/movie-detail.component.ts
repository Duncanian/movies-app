import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieDetailModel} from '../models/movie-details.model';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: MovieDetailModel;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {
  }

  ngOnInit(): void {
    this.moviesService.getOneMovie(this.route.snapshot.params.id).subscribe(
      (movie: MovieDetailModel) => {
        this.movie = movie;
        this.movie.favorite = !!this.moviesService.isMyFavorite(movie);
      }
    );
  }

  onToggleFavorite() {
    this.moviesService.toggleFavorite(this.movie);
    this.moviesService.favoriteWasUpdated.subscribe(
     (movie: MovieDetailModel) => {
       this.movie.favorite = movie.favorite;
     }
   );
  }

  onLoadImage(path: string, size: string) {
    return this.moviesService.getMovieImage(path, size);
  }

}
