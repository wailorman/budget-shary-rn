import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'

import Button from '../Button/Button'

const styles = StyleSheet.create({
  buttonTouchable: {
    minWidth: 150,
    flexGrow: 1,
    margin: 5,
  },
})

export default class SharingParticipantButton extends Component {
  static propTypes = {
    name: PropTypes.string,
    active: PropTypes.bool,
  }

  static defaultProps = {
    name: '',
    active: false,
  }

  render() {
    const { name, active } = this.props

    return (
      <Button
        touchableStyle={[
          styles.buttonTouchable,
        ]}
        text={name}
        type={active ? 'info' : 'light'}
        noShadow
      />
    )
  }
}
