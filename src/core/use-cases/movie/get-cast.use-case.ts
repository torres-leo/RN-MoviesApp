import {Cast} from '../../models/cast.model';
import {CastMapper} from '../../../infrasctructure/mappers/cast.mapper';
import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBCastResponse} from '../../../infrasctructure/interfaces/movie-db.responses';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBCastResponse>(
      `/${movieId}/credits`,
    );

    const actors = cast.map(actor => CastMapper.fromMovieDBCastToModel(actor));

    return actors;
  } catch (error) {
    console.log(error);
    throw new Error(`Cannot get movie cast: ${error}`);
  }
};
