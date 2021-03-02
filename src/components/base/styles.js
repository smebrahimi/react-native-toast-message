import { StyleSheet } from 'react-native';
import colors from '../../colors';

export const HEIGHT = 60;

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    minHeight: HEIGHT,
    width: '90%',
    backgroundColor: colors.white,
    elevation: 2,
    borderWidth: 1
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start' // in case of rtl the text will start from the right
  },
  trailingIconContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  trailingIcon: {
    width: 9,
    height: 9
  },
  text1: {
    fontSize: 15,
  },
  text2: {
    fontSize: 15
  }
});
