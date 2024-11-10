import {Movie} from '../../core/models/movie.model';
import type {Result} from '../interfaces/movie-db.responses';

export class MovieMapper {
  static fromMovieDBResultToModel(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.vote_average}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }
}
