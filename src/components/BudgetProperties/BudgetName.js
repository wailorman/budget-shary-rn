import React from 'react'
// import PropTypes from 'prop-types';
import Input from '../Input/Input'

class BudgetName extends React.Component {
  render() {
    return (
      <Input
        returnKeyType="next"
        placeholder="Название бюджета"
        hint="Например: Вечеринка в пабе"
        wrapperStyle={{
          marginTop: 0,
        }}
      />
    )
  }
}

export default BudgetName
