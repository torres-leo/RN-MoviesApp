import {Cast} from '../../core/models/cast.model';
import {MovieDBCast} from '../interfaces/movie-db.responses';

export class CastMapper {
  static fromMovieDBCastToModel(actor: MovieDBCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? '',
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
