import {Text} from '@rneui/themed';
import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';

interface TableProps {
  name: string;
  unit: string;
  date: string;
}

class Table extends PureComponent<TableProps> {
  render() {
    const {name, unit, date} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Nombre</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Fecha</Text>
          <Text style={styles.value}>{date}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Unidad de medida</Text>
          <Text style={styles.value}>{unit}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    width: 150,
  },
  value: {
    width: 100,
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'right',
  },
});

export default Table;
