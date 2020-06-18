import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/upcoming', pathMatch: 'full' },
    { path: 'upcoming', component: MoviesComponent },
    { path: 'favourite', component: FavouriteMoviesComponent },
    { path: 'movie/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
