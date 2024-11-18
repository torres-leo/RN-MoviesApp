import {Text, ScrollView} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigation';
import useMovie from '../../hooks/useMovie';
import Header from '../../components/shared/Header';
import MovieDetail from '../../components/movies/MovieDetail';
import FullScreenLoader from '../../components/loaders/FullScreen';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export default function Details({route}: Props) {
  const {movieId} = route.params;
  const {movie, isLoading, cast = []} = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  const renderMovieDetails = movie && <MovieDetail movie={movie} cast={cast} />;

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      {movie ? <Header movie={movie} /> : <Text>Movie not Found</Text>}

      {renderMovieDetails}
    </ScrollView>
  );
}
