import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

export default function FullScreenLoader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={'indigo'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
