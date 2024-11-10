import {AxiosAdapter} from './axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f59d65b34ab7339f8743ab3e99b2edea',
    language: 'es',
  },
});
