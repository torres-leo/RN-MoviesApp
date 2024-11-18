import {View, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Movie} from '../../../core/models/movie.model';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  borderRadius?: number;
  separator?: number;
}

export default function Poster({
  movie,
  height = 400,
  width = 300,
  borderRadius = 18,
  separator = 5,
}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      borderRadius: borderRadius,
      borderWidth: 1,
      borderColor: 'white',
    },
    imageContainer: {
      flex: 1,
      borderRadius: 10,
      shadowColor: '#ffffff',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },
  });

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}
      style={({pressed}) => ({
        width,
        height,
        marginHorizontal: separator,
        // paddingBottom: 20,
        paddingHorizontal: separator,
        opacity: pressed ? 0.9 : 1,
      })}>
      <View style={styles.imageContainer}>
        <Image source={{uri: movie.poster}} style={styles.image} />
      </View>
    </Pressable>
  );
}
