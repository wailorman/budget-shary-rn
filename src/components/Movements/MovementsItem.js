import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

import colors from '../../config/colors'

const styles = StyleSheet.create({
  wrapper: {
    // ...commonStyles.shadow,
    backgroundColor: colors.blockBackground,
    padding: 6,
    marginBottom: 12,
  },
  fromToContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fromText: {
    color: colors.text,
    fontSize: 20,
    flexGrow: 2,
    marginRight: 6,
    textAlign: 'right',
  },
  arrowIcon: {
    flexGrow: 0,
    width: 20,
    height: 20,
    fontSize: 20,
  },
  toText: {
    color: colors.text,
    fontSize: 20,
    flexGrow: 2,
    marginLeft: 6,
    textAlign: 'left',
  },
  totalContainer: {
    flexDirection: 'row',
  },
  totalText: {
    color: colors.text,
    fontSize: 20,
    flexGrow: 1,
    textAlign: 'center',
  },
})

export default class MovementsItem extends Component {
  static propTypes = {
    from: PropTypes.string,
    to: PropTypes.string,
    total: PropTypes.number,
  }

  static defaultProps = {
    from: null,
    to: null,
    total: null,
  }

  render() {
    const {
      from,
      to,
      total,
    } = this.props

    return (
      <View style={styles.wrapper}>
        <View style={styles.fromToContainer}>
          <Text
            style={styles.fromText}
          >
            {from}
          </Text>
          <Feather
            style={styles.arrowIcon}
            name="arrow-right"
          />
          <Text
            style={styles.toText}
          >
            {to}
          </Text>
        </View>
        <View style={styles.totalContainer}>
          <Text
            style={styles.totalText}
          >
            {total}
          </Text>
        </View>
      </View>
    )
  }
}
