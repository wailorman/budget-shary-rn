import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import colors from '../../config/colors'

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.blockTitle,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 2,
    marginBottom: 8,
    alignItems: 'center',
  },
  nameText: {
    flexGrow: 2,
    textAlign: 'center',
  },
  shareText: {
    flexGrow: 0,
    fontSize: 10,
    color: colors.hintText,
  },
})

export default class SharingParticipantTitle extends Component {
  static propTypes = {
    name: PropTypes.string,
    percentageShare: PropTypes.number,
    monetaryShare: PropTypes.number,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    name: '',
    percentageShare: null,
    monetaryShare: null,
    onPress: () => {},
  }

  render() {
    const {
      name,
      onPress,
      percentageShare,
      monetaryShare,
    } = this.props

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.wrapper}>
          <Text style={styles.nameText}>
            {name}
          </Text>
          {percentageShare && monetaryShare && (
            <Text style={styles.shareText}>
              {/* {'≈ 38% (600)'} */}
              {'≈ '}
              {percentageShare}
              {'% ('}
              {monetaryShare}
              {')'}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
