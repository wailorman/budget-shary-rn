import React, { Component } from 'react'

import Hint from '../components/Hint'
import Heading from '../components/Heading'
import Screen from '../components/Screen'
import BudgetNavigationButtons from '../components/Button/BudgetNavigationButtons'

import ProductItem from '../components/BudgetExpenses/ProductItem'

export default class BudgetExpenses extends Component {
  render() {
    return (
      <Screen>
        <Hint>
          Кто что покупал?
        </Hint>
        <Hint>
          Если кто-то не покупал ничего — оставьте пустым.
        </Hint>

        <Heading>
          Алиса
        </Heading>
        <ProductItem name="Milk" price="90" />
        <ProductItem />

        <Heading>
          Боб
        </Heading>
        <ProductItem name="Milk" price="90" />
        <ProductItem />

        <BudgetNavigationButtons />
      </Screen>
    )
  }
}
