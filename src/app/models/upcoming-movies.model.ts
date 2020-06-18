import {Movie} from './movie.model';

/* tslint:disable */

export class UpcomingMoviesModel {
    public page: number;
    public results: Movie[];
    public total_results: number;
    public dates: { maximum: string, minimum: string };
    public total_pages: number;

    constructor(
        page: number,
        results: Movie[],
        total_results: number,
        dates: { maximum: string, minimum: string },
        total_pages: number
    ) {
        this.page = page;
        this.results = results;
        this.total_results = total_results;
        this.dates = dates;
        this.total_pages = total_pages;
    }
}