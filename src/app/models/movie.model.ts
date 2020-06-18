/* tslint:disable */

export class Movie {
    public vote_count: number;
    public video: boolean;
    public poster_path: string;
    public popularity: number;
    public id: number;
    public adult: boolean;
    public backdrop_path: string;
    public original_language: string;
    public genre_ids: number[];
    public original_title : string;
    public title: string;
    public vote_average: number;
    public overview: string;
    public release_date: string;
    public favorite: boolean;
  
    constructor(
        vote_count: number,
        video: boolean,
        poster_path: string,
        id: number,
        adult: boolean,
        backdrop_path: string,
        original_language: string,
        original_title: string,
        genre_ids: number[],
        title: string,
        vote_average: number,
        overview: string,
        release_date: string,
        popularity: number,
        favorite = false
      ) {
         this.id = id ;
         this.popularity = popularity ;
         this.vote_count = vote_count ;
         this.adult = adult ;
         this.backdrop_path = backdrop_path ;
         this.video = video ;
         this.original_language = original_language ;
         this.original_title = original_title ;
         this.genre_ids = genre_ids ;
         this.title = title ;
         this.vote_average = vote_average ;
         this.overview = overview ;
         this.release_date = release_date;
         this.favorite = favorite;
         this.poster_path = poster_path ;
    }
  }