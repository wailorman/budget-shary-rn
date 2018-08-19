import {} from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import 'expo';

import routesConfig from './src/config/routes';

const StackNavigator = createStackNavigator(routesConfig);

const drawerRoutes = Object.keys(routesConfig).reduce((prev, curRouteName) => ({
  ...prev,
  [curRouteName]: StackNavigator,
}), {});


const DrawerNavigator = createDrawerNavigator(
  drawerRoutes,
  {
    // initialRouteName: 'Home',
  },
);

export default DrawerNavigator;
