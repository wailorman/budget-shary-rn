import React from 'react'
import PropTypes from 'prop-types'
import {
  TextInput as RNInput,
  StyleSheet,
  View,
} from 'react-native'
import _ from 'lodash'

import colors from '../../config/colors'
import commonStyles from '../../config/common-styles'
import Hint from '../Hint'

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.inputBackground,
    borderRadius: 2,

    flexDirection: 'row',

    marginTop: 8,
  },
  input: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,

    fontSize: 15,
    padding: 0,
    backgroundColor: 'rgba(0,0,0,0)',

    flexGrow: 1,
    alignItems: 'center',
  },
  sideElem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Input extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    inputStyle: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    wrapperStyle: PropTypes.object,
    hint: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    left: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    right: PropTypes.any,
  }

  static defaultProps = {
    inputStyle: null,
    wrapperStyle: null,
    hint: null,
    left: null,
    right: null,
  }

  render() {
    const {
      inputStyle,
      wrapperStyle,
      hint,
      left: Left,
      right: Right,
    } = this.props

    const propsToInput = _.omit(this.props, [
      'right',
      'left',
      'hint',
    ])

    return (
      <React.Fragment>
        <View
          style={[
            styles.wrapper,
            wrapperStyle,
            commonStyles.shadow,
          ]}
        >

          {Left && (
            <View style={styles.sideElem}>
              <Left />
            </View>
          )}

          <RNInput
            {...propsToInput}
            underlineColorAndroid="rgba(0,0,0,0)"
            style={[
              styles.input,
              inputStyle,
            ]}
          />

          {Right && (
            <View style={styles.sideElem}>
              <Right />
            </View>
          )}

        </View>
        {hint && (
          <Hint>
            {hint}
          </Hint>
        )}
      </React.Fragment>
    )
  }
}

export default Input
