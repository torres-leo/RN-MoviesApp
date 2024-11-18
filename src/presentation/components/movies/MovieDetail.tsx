import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {FullMovie} from '../../../core/models/movie.model';
import {formatCurrency} from '../../../utils/formatCurrency';
import {Cast} from '../../../core/models/cast.model';
import Actor from '../cast/Actor';
import {globalColors} from '../../theme/theme';
import RatingBadge from '../shared/RatingBadge';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export default function MovieDetail({movie, cast}: Props) {
  const {rating, description, budget} = movie;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.genre}>{movie.genres.join(', ')}</Text>
        {/* <Text style={styles.rating}>{rating}</Text> */}
        <RatingBadge value={rating} />

        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.text}>{description}</Text>

        <Text style={styles.subtitle}>Budget</Text>
        <Text style={styles.text}>{formatCurrency(budget)}</Text>

        <Text style={styles.subtitle}>Cast</Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Actor actor={item} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginHorizontal: 20,
  },
  genre: {
    color: globalColors.gray,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
    color: globalColors.white,
  },
  text: {
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 20,
    color: globalColors.gray,
  },
});
