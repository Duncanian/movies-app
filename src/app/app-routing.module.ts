import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';

const routes: Routes = [
    { path: '', redirectTo: '/upcoming', pathMatch: 'full' },
    { path: 'upcoming', component: MoviesComponent },
    { path: 'favourite', component: FavouriteMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
