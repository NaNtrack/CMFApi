import React from 'react';
import {useDolarScreen} from './useDolarScreen';
import {ActivityIndicator, FlatList} from 'react-native';
import {ListItem} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

export const DolarScreen = () => {
  const {dolarData, loading} = useDolarScreen();
  const {navigate} = useNavigation<any>();

  const renderDolarItem = ({item}: any) => {
    return (
      <ListItem
        onPress={() =>
          navigate('DetailsScreen', {
            title: 'Dólar',
            fecha: item.Fecha,
            valor: item.Valor,
            unit: 'Pesos',
            data: dolarData.slice(0, 10),
          })
        }>
        <ListItem.Content>
          <ListItem.Title>{item.Fecha}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Content right>
          <ListItem.Title>{item.Valor}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={dolarData}
      renderItem={renderDolarItem}
      keyExtractor={(item: any) => item.Fecha}
    />
  );
};
