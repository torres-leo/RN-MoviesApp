import {useEffect, useState} from 'react';
import {getMovieByIdUseCase, getMovieCastUseCase} from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/http/movieDB.adapter';
import {FullMovie} from '../../core/models/movie.model';
import {Cast} from '../../core/models/cast.model';

export default function useMovie(movieId: number) {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setmovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    try {
      setIsLoading(true);

      const fullMoviePromise = getMovieByIdUseCase(movieDBFetcher, movieId);
      const castPromise = getMovieCastUseCase(movieDBFetcher, movieId);

      const [fullMovie, castMovie] = await Promise.all([
        fullMoviePromise,
        castPromise,
      ]);

      setmovie(fullMovie);
      setCast(castMovie);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error(`Error while fetching data. ${error}`);
    }
  };

  return {isLoading, movie, cast};
}
