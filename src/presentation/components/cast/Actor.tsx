import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Cast} from '../../../core/models/cast.model';
import {globalColors} from '../../theme/theme';

interface Props {
  actor: Cast;
}

export default function Actor({actor}: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: actor.avatar}}
        style={{width: 100, height: 150, borderRadius: 10}}
      />

      <View style={styles.actorInfo}>
        <Text style={styles.characterName}>{actor.character}</Text>
        <Text style={styles.name}>{actor.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 10,
    width: 100,
  },
  actorInfo: {
    marginLeft: 0,
    marginTop: 5,
  },
  name: {
    color: globalColors.white,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
  characterName: {
    color: globalColors.gray,
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
    textAlign: 'center',
  },
});
