import { Platform } from 'react-native'
import colors from './colors'

export default {
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 15,
  },
  shadow: Platform.OS === 'ios'
    ? {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowRadius: 0.6,
      shadowOpacity: 0.25,
    }
    : {
      elevation: 2,
    },
  noShadow: Platform.OS === 'ios'
    ? {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 0,
      shadowOpacity: 0,
    }
    : {
      elevation: 0,
    },
}
