import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';

import HorizontalCarousel from '../../components/movies/HorizontalCarousel';
import PosterCarousel from '../../components/movies/PosterCarousel';
import useMovies from '../../hooks/useMovies';
import FullScreenLoader from '../../components/loaders/FullScreen';

export default function Home() {
  const {top} = useSafeAreaInsets();

  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
    topRatedNextPage,
  } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  const styles = StyleSheet.create({
    ToSaveArea: {
      marginTop: 20 + top,
      paddingBottom: 30,
    },
    gradient: {
      width: 200,
      height: 200,
      borderRadius: 20,
    },
  });

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View style={styles.ToSaveArea}>
        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarousel movies={upcoming} title="Upcoming Movies" />
        <HorizontalCarousel
          movies={popular}
          title="Most Popular"
          loadNextPage={popularNextPage}
        />
        <HorizontalCarousel
          movies={topRated}
          title="Top Rated"
          loadNextPage={topRatedNextPage}
        />
      </View>
    </ScrollView>
  );
}
