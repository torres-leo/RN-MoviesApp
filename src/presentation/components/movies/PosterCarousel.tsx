import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Movie} from '../../../core/models/movie.model';
import {ScrollView} from 'react-native-gesture-handler';
import Poster from './Poster';

interface Props {
  movies: Movie[];
  height?: number;
}

export default function PosterCarousel({movies, height = 440}: Props) {
  const styles = StyleSheet.create({
    container: {
      height: height,
    },
  });

  const renderMovies = () => {
    return movies.map(movie => <Poster key={movie.id} movie={movie} />);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderMovies()}
      </ScrollView>
    </View>
  );
}
