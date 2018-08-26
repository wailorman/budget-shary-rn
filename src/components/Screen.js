import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import commonStyles from '../config/common-styles'

export default class Screen extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.any,
  }

  static defaultProps = {
    children: null,
    style: null,
  }

  render() {
    const { children, style } = this.props
    return (
      <View
        style={[
          commonStyles.screen,
          style,
        ]}
      >
        {children}
      </View>
    )
  }
}
