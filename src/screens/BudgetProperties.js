import React from 'react'
import { View } from 'react-native'

import commonStyles from '../config/common-styles'

import BudgetName from '../components/BudgetProperties/BudgetName'
import Heading from '../components/Heading'
import BudgetParticipant from '../components/BudgetProperties/BudgetParticipant'
import Hint from '../components/Hint'

class BudgetPropertiesScreen extends React.Component {
  static navigationOptions = {
    title: 'BudgetProperties',
  }

  render() {
    return (
      <View style={[commonStyles.screen]}>
        <BudgetName />
        <Heading>
          Участники
        </Heading>
        <BudgetParticipant name="Алиса" />
        <BudgetParticipant name="Боб" />
        <BudgetParticipant />
        <Hint>
          Между кем нужно рассчитать затраты?
        </Hint>
      </View>
    )
  }
}

export default BudgetPropertiesScreen
