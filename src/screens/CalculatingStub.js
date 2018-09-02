import React, { Component } from 'react'

import Screen from '../components/Screen'

import CalculatingStub from '../components/CalculatingStub'

export default class CalculatingStubScreen extends Component {
  render() {
    return (
      <Screen>
        <CalculatingStub />
      </Screen>
    )
  }
}
