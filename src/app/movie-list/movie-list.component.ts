import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../models/movie.model';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  onToggleFavorite() {
    this.moviesService.toggleFavorite(this.movie);
  }

  onLoadImage(path: string, size: string) {
    return this.moviesService.getImage(path, size);
  }

}
