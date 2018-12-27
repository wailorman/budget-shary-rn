import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

// import commonStyles from '../../config/common-styles'
import colors from '../../config/colors'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  priceText: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: colors.text,
  },
})

export default class SharingProductTitle extends Component {
  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
  }

  static defaultProps = {
    name: null,
    price: null,
  }

  render() {
    const { name, price } = this.props

    return (
      <View
        style={styles.wrapper}
      >
        <Text style={styles.nameText}>
          {name}
        </Text>
        <Text style={styles.priceText}>
          {price}
        </Text>
      </View>
    )
  }
}
