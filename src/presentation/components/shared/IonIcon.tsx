import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size?: number;
  color?: string;
  onPressFunct?: () => void;
}

export default function IonIcon({
  name,
  size = 25,
  color = '#fff',
  onPressFunct,
}: Props) {
  return (
    <Pressable style={styles.container}>
      <Icon
        name={name.trim()}
        size={size}
        color={color.trim()}
        onPress={onPressFunct}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: '100%',
    // shadowColor: '#ffffff',
    // shadowOffset: {
    //   width: 0,
    //   height: 20,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
});
