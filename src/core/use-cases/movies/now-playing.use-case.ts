import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrasctructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrasctructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.model';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    return nowPlaying.results.map(result =>
      MovieMapper.fromMovieDBResultToModel(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error Fetching Movies - Now Playing');
  }
};
