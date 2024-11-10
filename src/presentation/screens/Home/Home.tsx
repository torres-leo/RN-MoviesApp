import {View, Text} from 'react-native';
import React from 'react';
import useMovies from '../../hooks/useMovies';

export default function Home() {
  const {} = useMovies();

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
