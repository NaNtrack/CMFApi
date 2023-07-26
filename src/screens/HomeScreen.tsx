import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import IndicatorItem from '../components/IndicatorItem';
import {useNavigation} from '@react-navigation/native';

const indicators = [
  {
    key: 'Dolar',
    value: 'Dólar Observado',
  },
  {
    key: 'Euro',
    value: 'Euro',
  },
  {
    key: 'Ipc',
    value: 'Indice de Precios al Consumidor',
  },
  {
    key: 'Uf',
    value: 'Unidad de Fomento',
  },
  {
    key: 'Utm',
    value: 'Unidad Tributaria Mensual',
  },
];

function HomeScreen() {
  const navigation = useNavigation<any>();

  const renderIndicatorItem = ({item}: any) => {
    return (
      <IndicatorItem
        name={item.value}
        onPress={() => navigation.navigate(`${item.key}Screen`)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={indicators}
        renderItem={renderIndicatorItem}
        keyExtractor={(item: any) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
