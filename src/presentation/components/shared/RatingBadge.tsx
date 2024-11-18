import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {globalColors} from '../../theme/theme';

interface Props {
  value: number;
}

export default function RatingBadge({value}: Props) {
  const styles = StyleSheet.create({
    container: {
      width: 35,
      backgroundColor: value > 6 ? 'green' : value < 5 ? 'red' : 'yellow',
      borderRadius: 5,
      paddingBlock: 2,
      marginBottom: 15,
    },
    badge: {
      color:
        value <= 4
          ? globalColors.white
          : value <= 6
          ? 'black'
          : globalColors.white,
      fontSize: 13,
      fontWeight: '500',
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.badge}>{value}</Text>
    </View>
  );
}
