import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

import Button from '../Button'

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    marginBottom: 10,
    width: 130,
    alignSelf: 'center',
  },
  buttonView: {
    padding: 6,
  },
})

export default class SharingSelectionButton extends Component {
  static propTypes = {
    selectAll: PropTypes.bool,
    deselectAll: PropTypes.bool,
    onPress: PropTypes.func,
    children: PropTypes.string,
  }

  static defaultProps = {
    selectAll: null,
    deselectAll: null,
    onPress: () => {},
    children: null,
  }

  render() {
    const {
      selectAll, deselectAll, onPress, children,
    } = this.props

    const text = (selectAll && 'Выделить всех') || (deselectAll && 'Снять выделение') || children

    return (
      <View
        style={styles.wrapper}
      >
        <Button
          text={text}
          type="light"
          onPress={onPress}
          viewStyle={styles.buttonView}
          noShadow
        />
      </View>
    )
  }
}
