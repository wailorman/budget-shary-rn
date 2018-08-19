import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { DateElem } from './DateElem';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#c8c8c8',
  },
  dateBox: {
    marginRight: 14,
  },
  descriptionBox: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    marginBottom: 5,
  },
  subTitle: {
    color: '#363636',
  },
});

export class BudgetListItemComponent extends React.Component {
  render() {
    const { navigation, title, subTitle } = this.props;

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Another')}>
        <View style={styles.wrapper}>
          <View style={styles.dateBox}>
            <DateElem />
          </View>
          <View style={styles.descriptionBox}>
            <Text style={styles.title}>
              {title}
            </Text>
            <Text style={styles.subTitle}>
              {subTitle}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

BudgetListItemComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

BudgetListItemComponent.defaultProps = {
  title: '',
  subTitle: '',
};

export default withNavigation(BudgetListItemComponent);
