import React from 'react';
import {useDolarScreen} from './useDolarScreen';
import {ActivityIndicator, FlatList} from 'react-native';
import {ListItem} from '@rneui/themed';

export const DolarScreen = () => {
  const {dolarData, loading} = useDolarScreen();

  const renderDolarItem = ({item}: any) => {
    return (
      <ListItem>
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
