import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infrasctructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrasctructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.model';
import {OptionsFetch} from '../../models/options-fetch.model';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
  options?: OptionsFetch,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated', {
      params: {
        page: options?.page ?? 1,
      },
    });

    return topRated.results.map(result =>
      MovieMapper.fromMovieDBResultToModel(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error Fetching Movies - Top Rated');
  }
};
