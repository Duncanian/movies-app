import { MoviesService } from './movies.service';
import {TestBed} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {environment} from '../environments/environment';

const baseURL = environment.baseApiURL;
const apiKey = environment.apiKey;

describe('MovieService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        MoviesService
      ],
    });
    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it(`should fetch Observable upcoming movies`,() => {
    const movies = [
        {id: 1, title: 'movie title'},
        {id: 2, title: 'movie title'},
    ];

    service.getUpcomingMovies().subscribe(
    (mov: any) => {
        expect(mov).toEqual(movies);
    }
    );
    const req = httpMock.expectOne(`${baseURL}movie/upcoming?api_key=${apiKey}`);
    expect(req.request.method).toBe('GET');

    req.flush(movies);
    httpMock.verify();
  });

  it(`should fetch one Observable movie`,() => {
    const movie = {id: 1, title: 'movie title'};
    service.getOneMovie(1).subscribe(
    (mov: any) => {
        expect(mov).toBe(movie);
    }
    );
    const req = httpMock.expectOne(`${baseURL}movie/1?api_key=${apiKey}`);
    expect(req.request.method).toBe('GET');

    req.flush(movie);
    httpMock.verify();
  });
});