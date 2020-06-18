import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  { path: '', component: MoviesComponent, children: [
    { path: 'upcoming', component: MovieListComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
