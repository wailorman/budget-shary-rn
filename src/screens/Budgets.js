import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  // createStackNavigator,
  // withNavigation,
  SafeAreaView,
  // Header,
} from 'react-navigation';

import BudgetListItem from '../components/BudgetList/BudgetListItem';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  scroll: {
    // flexDirection: 'row',
    width,
  },
});

class BudgetsScreen extends React.Component {
  static navigationOptions = {
    title: 'Budgets',
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>
          <BudgetListItem title="Ваня нальёт" subTitle="1800 ₽" />
          <BudgetListItem title="Помидорки" subTitle="200 ₽" />
          <BudgetListItem title="ТКХ" subTitle="20000 ₽" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default BudgetsScreen;
