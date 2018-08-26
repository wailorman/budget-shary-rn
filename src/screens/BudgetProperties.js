import React from 'react'

import commonStyles from '../config/common-styles'

import BudgetName from '../components/BudgetProperties/BudgetName'
import Heading from '../components/Heading'
import BudgetParticipant from '../components/BudgetProperties/BudgetParticipant'
import Hint from '../components/Hint'
import Screen from '../components/Screen'

import { BudgetNavigationButtons } from '../components/Button'

class BudgetPropertiesScreen extends React.Component {
  static navigationOptions = {
    title: 'BudgetProperties',
  }

  render() {
    return (
      <Screen style={[commonStyles.screen]}>
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
        <BudgetNavigationButtons />
      </Screen>
    )
  }
}

export default BudgetPropertiesScreen
