import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {H1} from '../../components/H1';
import {useRoute} from '@react-navigation/native';
import {useIndicators} from '../../hooks/useIndicators';
import Table from '../../components/Table';
import {Graph} from '../../components/Graph';

export const DetailsScreen = () => {
  const {params} = useRoute<any>();
  const {title, path, root, unit, dataCount} = params;
  const {data, loading} = useIndicators(path, root);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <H1 text={data[0]?.Valor} />
      <Table name={title} unit={unit} date={data[0]?.Fecha} />
      <Graph data={data} dataCount={dataCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
