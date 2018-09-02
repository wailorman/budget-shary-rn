import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'

import colors from '../config/colors'

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    color: colors.headingText,
    marginTop: 20,
    marginBottom: 8,
  },
})

class Heading extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
  }

  static defaultProps = {
    children: null,
    style: null,
  }

  render() {
    const { style, children } = this.props
    return (
      <Text
        {...this.props}
        style={[
          styles.heading,
          style,
        ]}
      >
        {children}
      </Text>
    )
  }
}

export default Heading
