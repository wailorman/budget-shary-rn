import React, { Component } from 'react'

import Screen from '../components/Screen'

import MovementItem from '../components/Movements/MovementsItem'

export default class Movements extends Component {
  render() {
    return (
      <Screen>
        <MovementItem
          from="Майк"
          to="Алиса"
          total={532.6}
        />
        <MovementItem
          from="Боб"
          to="Кэшбэк"
          total={105.9}
        />
      </Screen>
    )
  }
}
