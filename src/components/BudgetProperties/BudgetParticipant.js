import React from 'react'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import { TouchableHighlight, StyleSheet } from 'react-native'

import colors from '../../config/colors'

import Input from '../Input'

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    width: 12,
    height: 19,
    color: colors.iconColor,
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
})

class BudgetParticipant extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    onRemove: PropTypes.func,
  }

  static defaultProps = {
    name: null,
    onChange: () => {},
    onRemove: () => {},
  }

  render() {
    const { name, onChange, onRemove } = this.props

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

    return (
      <Input
        value={name}
        placeholder="Имя нового участника"
        right={name && right}
        onChange={onChange}
      />
    )
  }
}

export default BudgetParticipant
