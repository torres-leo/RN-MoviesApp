import {View, Text, StyleSheet, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import {FullMovie} from '../../../core/models/movie.model';
import {useNavigation} from '@react-navigation/native';
import IonIcon from './IonIcon';
import {convertMinutesToHours} from '../../../utils';
import {globalColors} from '../../theme/theme';

interface Props {
  movie: FullMovie;
}

export default function Header({movie}: Props) {
  const {height: screenHight} = useWindowDimensions();
  const navigation = useNavigation();

  const {poster, duration, title} = movie;

  return (
    <>
      <View style={styles.backButton}>
        <View style={styles.backButtonShadow}>
          <IonIcon
            // name="arrow-back-circle-outline"
            name="arrow-back-outline"
            size={45}
            onPressFunct={() => navigation.goBack()}
            color="lightsalmon"
          />
        </View>
      </View>

      <View style={{...styles.imageContainer, height: screenHight * 0.7}}>
        <View style={styles.imageBorder}>
          <Image style={styles.posterImage} source={{uri: poster}} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.durationRow}>
        <Text style={styles.durationText}>Duration: </Text>
        <Text style={styles.durationTime}>
          {convertMinutesToHours(duration)}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: globalColors.white,
  },
  durationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginStart: 20,
  },
  durationText: {
    fontSize: 24,
    fontWeight: '700',
    color: globalColors.white,
  },
  durationTime: {
    fontSize: 22,
    fontWeight: '500',
    color: globalColors.white,
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    // elevation: 9,
    top: 35,
    left: 10,
    borderWidth: 4,
    borderRadius: '100%',
    borderColor: '#ffffffc1',
  },
  backButtonShadow: {
    borderRadius: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 30,
  },
});
