import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infrasctructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrasctructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.model';
import {OptionsFetch} from '../../models/options-fetch.model';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: OptionsFetch,
): Promise<Movie[]> => {
  try {
    const pupular = await fetcher.get<MovieDBMoviesResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });

    return pupular.results.map(result =>
      MovieMapper.fromMovieDBResultToModel(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error Fetching Movies - Popular movies');
  }
};
