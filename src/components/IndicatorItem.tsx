import React, {Component} from 'react';
import {Avatar, ListItem} from '@rneui/themed';
import {StyleSheet} from 'react-native';

interface IndicatorItemProps {
  name: string;
  onPress: () => void;
}

class IndicatorItem extends Component<IndicatorItemProps, {}> {
  render(): React.ReactNode {
    return (
      <ListItem onPress={this.props.onPress}>
        <ListItem.Content>
          <ListItem.Title>{this.props.name}</ListItem.Title>
        </ListItem.Content>
        <Avatar
          size={20}
          rounded
          icon={{name: 'info', type: 'font-awesome-5'}}
          containerStyle={styles.avatar}
        />
        <ListItem.Chevron />
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: 'lightblue',
  },
});

export default IndicatorItem;
