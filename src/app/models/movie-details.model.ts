/* tslint:disable */

// import {GenreModel} from "./genre.model";

export class MovieDetailModel {
  public adult: boolean;
  public backdrop_path: string;
  public belongs_to_collection: any;
  public budget: number;
//   public genres: {id: number, name: string} [];
  public homepage: string;
  public id: number;
  public imdb_id: string;
  public original_language: string;
  public original_title: string;
  public overview: string;
  public popularity: number;
  public poster_path: string;
  public production_companies: { id: number, logo_path: any, name: string, origin_country: string }[];
  public production_countries: { iso_3166_1: string, name: string }[];
  public release_date: string;
  public revenue: number;
  public runtime: number;
  public spoken_languages: { iso_639_1: string, name: string}[];
  public status: string;
  public tagline: string;
  public title: string;
  public video: boolean;
  public vote_average: number;
  public vote_count: number;
//   public favorite?: boolean;

  constructor(
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: any,
    budget: number,
    // genres: GenreModel [],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: { id: number, logo_path: any, name: string, origin_country: string }[],
    production_countries: { iso_3166_1: string, name: string }[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: { iso_639_1: string, name: string}[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    // favorite = false
  ) {
    this.backdrop_path = backdrop_path;
    this.budget = budget;
    this.belongs_to_collection = belongs_to_collection;
    this.adult = adult;
    // this.genres = genres;
    this.homepage = homepage;
    this.id = id;
    this.imdb_id = imdb_id;
    this.original_language = original_language;
    this.original_title = original_title;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.production_companies = production_companies;
    this.production_countries = production_countries;
    this.release_date = release_date;
    this.revenue = revenue;
    this.runtime = runtime;
    this.spoken_languages = spoken_languages;
    this.status = status;
    // this.favorite = favorite;
    this.tagline = tagline;
    this.title = title;
    this.video = video;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }
}