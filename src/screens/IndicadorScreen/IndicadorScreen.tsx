import React from 'react';
import {useIndicators} from '../../hooks/useIndicators';
import {ActivityIndicator, FlatList} from 'react-native';
import {ListItem} from '@rneui/themed';
import {useRoute} from '@react-navigation/native';

export const IndicadorScreen = () => {
  const {params} = useRoute<any>();
  const {path, root} = params;
  const {data, loading} = useIndicators(path, root);

  const renderDataItem = ({item}: any) => {
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
      data={data}
      renderItem={renderDataItem}
      keyExtractor={(item: any) => item.Fecha}
    />
  );
};
