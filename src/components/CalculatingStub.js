import React, { Component } from 'react'
import {
  View, Text, StyleSheet, Dimensions,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import colors from '../config/colors'

import Screen from './Screen'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  wrapper: {
    height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  loadingIcon: {
    color: colors.hintText,
    fontSize: 100,
  },
  loadingIconContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: colors.hintText,
    fontSize: 20,
    textAlign: 'center',
  },
  textContainer: {
    flexGrow: 2,
    flexDirection: 'column',
  },
})

export default class CalculatingStub extends Component {
  render() {
    return (
      <Screen>
        <View
          style={styles.wrapper}
        >
          <View
            style={styles.loadingIconContainer}
          >
            <Ionicons
              style={styles.loadingIcon}
              name="ios-time-outline"
            />
          </View>
          <View
            style={styles.textContainer}
          >
            <Text
              style={styles.text}
            >
            Секундочку, бухгалтер уже трудится...
            </Text>
          </View>
        </View>
      </Screen>
    )
  }
}
