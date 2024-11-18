import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infrasctructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrasctructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.model';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

    return upcoming.results.map(result =>
      MovieMapper.fromMovieDBResultToModel(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error Fetching Movies - Upcoming movies');
  }
};
