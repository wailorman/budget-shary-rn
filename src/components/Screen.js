import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'

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
      <ScrollView
        style={[
          commonStyles.screen,
          style,
        ]}
      >
        {children}
      </ScrollView>
    )
  }
}
