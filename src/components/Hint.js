import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet } from 'react-native'

import colors from '../config/colors'

const styles = StyleSheet.create({
  hint: {
    color: colors.hintText,
    fontSize: 12,
    marginTop: 6,
  },
})

class Hint extends React.Component {
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
    const { children, style } = this.props
    return (
      <Text
        {...this.props}
        style={[
          styles.hint,
          style,
        ]}
      >
        {children}
      </Text>
    )
  }
}

export default Hint
