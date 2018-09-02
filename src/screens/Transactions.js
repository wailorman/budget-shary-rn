import React, { Component } from 'react'

import Screen from '../components/Screen'

import TransactionItem from '../components/Transactions/TransactionsItem'

export default class Transactions extends Component {
  render() {
    return (
      <Screen>
        <TransactionItem
          from="Майк"
          to="Алиса"
          total={532.6}
        />
        <TransactionItem
          from="Боб"
          to="Кэшбэк"
          total={105.9}
        />
      </Screen>
    )
  }
}
