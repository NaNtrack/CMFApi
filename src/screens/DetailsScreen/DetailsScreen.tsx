import React from 'react';
import {StyleSheet, View} from 'react-native';
import {H1} from '../../components/H1';
import {useRoute} from '@react-navigation/native';

export const DetailsScreen = () => {
  const route = useRoute<any>();
  const {params} = route;

  return (
    <View style={styles.container}>
      <H1 text={params.valor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
