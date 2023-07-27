import React, {Component} from 'react';
import {Avatar, ListItem} from '@rneui/themed';
import {StyleSheet} from 'react-native';

interface IndicatorItemProps {
  name: string;
  subtitle: string;
  onTitlePress: () => void;
  onInfoPress: () => void;
}

class IndicatorItem extends Component<IndicatorItemProps, {}> {
  render(): React.ReactNode {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title onPress={this.props.onTitlePress}>
            {this.props.name}
          </ListItem.Title>
          <ListItem.Subtitle>{this.props.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <Avatar
          size={20}
          rounded
          icon={{name: 'info', type: 'font-awesome-5'}}
          containerStyle={styles.avatar}
          onPress={this.props.onInfoPress}
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
