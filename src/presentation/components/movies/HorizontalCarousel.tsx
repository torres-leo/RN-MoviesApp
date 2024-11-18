import {
  View,
  Text,
  StyleSheet,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Movie} from '../../../core/models/movie.model';
import Poster from './Poster';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

export default function HorizontalCarousel({
  movies,
  title,
  loadNextPage,
}: Props) {
  const styles = StyleSheet.create({
    container: {
      height: title ? 260 : 220,
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: '800',
      marginLeft: 10,
      marginBottom: 10,
      color: 'white',
    },
  });

  const isLoadingNextPage = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoadingNextPage.current = false;
    }, 300);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoadingNextPage.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoadingNextPage.current = true;

    loadNextPage && loadNextPage();
  };

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <Poster
            movie={item}
            width={155}
            height={220}
            borderRadius={11}
            separator={3}
          />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
}
