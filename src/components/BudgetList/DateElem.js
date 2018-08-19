import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#efefef',
    borderRadius: 5,
    padding: 5,
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  day: {
    fontSize: 26,
  },
  month: {
    fontSize: 17,
  },
});

export class DateElem extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.day}>
          29
        </Text>
        <Text style={styles.month}>
          янв
        </Text>
      </View>
    );
  }
}

export default DateElem;
