import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'

import colors from '../../config/colors'
import commonStyles from '../../config/common-styles'

const styles = StyleSheet.create({
  touchable: {
    marginTop: 8,
  },
  wrapper: {
    padding: 10,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    ...commonStyles.shadow,
  },
  text: {
    fontSize: 17,
  },
})

const wrapperStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
  },
  danger: {
    backgroundColor: colors.danger,
  },
  normal: {
    backgroundColor: colors.normal,
  },
})

const textStyles = StyleSheet.create({
  primary: {
    color: colors.invertedText,
  },
  danger: {
    color: colors.invertedText,
  },
  normal: {
    color: colors.text,
  },
})

class Button extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    touchableStyle: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    viewStyle: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    textStyle: PropTypes.any,
    type: PropTypes.oneOf([
      'primary',
      'danger',
      'normal',
    ]),
  }

  static defaultProps = {
    text: '',
    type: 'normal',
    touchableStyle: {},
    viewStyle: {},
    textStyle: {},
  }

  render() {
    const {
      text,
      type,
      touchableStyle,
      viewStyle,
      textStyle,
    } = this.props

    const underlayColorMap = {
      normal: 'rgba(0, 0, 0, 0.8)',
      primary: 'rgba(255, 255, 255, 0.9)',
      danger: 'rgba(255, 255, 255, 0.9)',
    }

    return (
      <TouchableHighlight
        onPress={() => {}}
        underlayColor={underlayColorMap[type]}
        style={[
          styles.touchable,
          touchableStyle,
        ]}
      >
        <View
          style={[
            styles.wrapper,
            wrapperStyles[type],
            commonStyles.shadow,
            viewStyle,
          ]}
        >
          <Text
            style={[
              textStyles[type],
              textStyle,
            ]}
          >
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default Button
