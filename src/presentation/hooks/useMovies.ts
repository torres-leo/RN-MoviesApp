import {useEffect, useState} from 'react';
import {Movie} from '../../core/models/movie.model';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/http/movieDB.adapter';

let popularPageNumber = 1;

export default function useMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };

  const popularNextPage = async () => {
    popularPageNumber++;

    const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
      page: popularPageNumber,
    });

    setPopular(prev => {
      const movieIds = new Set(prev.map(movie => movie.id));
      const newMovies = popularMovies.filter(movie => !movieIds.has(movie.id));
      return [...prev, ...newMovies];
    });
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    // Methods
    popularNextPage,
  };
}
