import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Button,
  StyleSheet,
} from 'react-native'
import { DrawerActions } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  render() {
    const { navigation: { dispatch, navigate } } = this.props
    return (
      <View style={styles.container}>
        <Button
          title="Navigate to..."
          onPress={() => dispatch(DrawerActions.openDrawer())}
        />
        <Button
          title="Budget Properties"
          onPress={() => navigate('BudgetProperties')}
        />
        <Button
          title="Budget Expenses"
          onPress={() => navigate('BudgetExpenses')}
        />
        <Button
          title="Budget Shares"
          onPress={() => navigate('BudgetShares')}
        />
        <Button
          title="Transactions"
          onPress={() => navigate('Transactions')}
        />
        <Button
          title="CalculatingStub"
          onPress={() => navigate('CalculatingStub')}
        />
      </View>
    )
  }
}

export default HomeScreen
