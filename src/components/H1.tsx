import {Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';

interface H1Props {
  text: string;
}

export function H1({text}: H1Props) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: 'blue',
  },
});
