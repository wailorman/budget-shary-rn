import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import commonStyles from '../../config/common-styles'

import Button from './Button'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  backButtonContainer: {
    flexGrow: 1,
  },
  backButton: {
    ...commonStyles.noShadow,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  nextButtonContainer: {
    flexGrow: 2,
  },
  nextButton: {
    ...commonStyles.noShadow,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
})

class BudgetNavigationButtons extends React.Component {
  render() {
    return (
      <View
        style={[
          styles.wrapper,
        ]}
      >
        <View
          style={[
            styles.backButtonContainer,
          ]}
        >
          <Button
            text="Назад"
            viewStyle={[
              styles.backButton,
            ]}
          />
        </View>
        <View
          style={[
            styles.nextButtonContainer,
          ]}
        >
          <Button
            text="Дальше"
            type="primary"
            viewStyle={[
              styles.nextButton,
            ]}
          />
        </View>
      </View>
    )
  }
}

export default BudgetNavigationButtons
