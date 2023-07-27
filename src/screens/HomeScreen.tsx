import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import IndicatorItem from '../components/IndicatorItem';
import {useNavigation} from '@react-navigation/native';
import {indicators} from '../config/indicators';

function HomeScreen() {
  const navigation = useNavigation<any>();

  const renderIndicatorItem = ({item}: any) => {
    return (
      <IndicatorItem
        name={item.value}
        subtitle={item.unit}
        onTitlePress={() =>
          navigation.navigate('IndicadorScreen', {
            title: item.key,
            path: item.path,
            root: item.root,
            unit: item.unit,
          })
        }
        onInfoPress={() => {
          navigation.navigate('DetailsScreen', {
            title: item.key,
            path: item.path,
            root: item.root,
            unit: item.unit,
            dataCount: item.dataCount,
          });
        }}
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
