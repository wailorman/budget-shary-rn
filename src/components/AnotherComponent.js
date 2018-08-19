import React from 'react';
import { View, Text, Button } from 'react-native';

export default class AnotherScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'blue' }}>
        <Text>
          Another route!
        </Text>
        <Button title="Go to here" onPress={() => this.props.navigation.push('Another')} />
      </View>
    );
  }
}

AnotherScreen.navigationOptions = {
  title: 'Another',
};
