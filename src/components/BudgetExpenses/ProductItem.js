import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import colors from '../../config/colors'

import Input from '../Input'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  nameInputContainer: {
    flexGrow: 2,
    marginRight: 6,
  },
  priceInputContainer: {
    flexGrow: 1,
  },
  nameInput: {
    flexGrow: 2,
  },
  priceInput: {
    flexGrow: 1,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 19,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    marginRight: 9,
    borderRadius: 2,
  },
  icon: {
    fontSize: 20,
    width: 12,
    height: 19,
    color: colors.iconColor,
  },
})

export default class ProductItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,

    onRemove: PropTypes.func,
    onChangeName: PropTypes.func,
    onChangePrice: PropTypes.func,
  }

  static defaultProps = {
    name: null,
    price: null,

    onRemove: () => {},
    onChangeName: () => {},
    onChangePrice: () => {},
  }

  render() {
    const {
      name,
      price,

      onRemove,
      onChangeName,
      onChangePrice,
    } = this.props

    const right = () => (
      <TouchableHighlight
        onPress={onRemove}
        style={styles.touchable}
        underlayColor="rgba(0,0,0,0.1)"
      >
        <Ionicons
          style={styles.icon}
          name="md-close"
        />
      </TouchableHighlight>
    )

    const isRemoveIconVisible = name || price

    return (
      <View
        style={styles.wrapper}
      >
        <View
          style={styles.nameInputContainer}
        >
          <Input
            style={styles.nameInput}
            placeholder="Название"
            onChange={onChangeName}
          />
        </View>
        <View
          style={styles.priceInputContainer}
        >
          <Input
            style={styles.priceInput}
            placeholder="Цена"
            onChange={onChangePrice}
            right={isRemoveIconVisible && right}
          />
        </View>
      </View>
    )
  }
}
