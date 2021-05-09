import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import Icon from '../icon';
import { icons } from '../../assets';
import { stylePropType } from '../../utils/prop-types';
import styles from './styles';

function BaseToast({
  trailingIcon,
  text1,
  text2,
  onPress,
  onTrailingIconPress,
  style,
  trailingIconContainerStyle,
  trailingIconStyle,
  contentContainerStyle,
  text1Style,
  text2Style,
  activeOpacity,
  text1NumberOfLines,
  text2NumberOfLines
}) {
  return (
    <TouchableOpacity
      testID='rootView'
      style={[styles.base, style]}
      onPress={onPress}
      activeOpacity={onPress ? activeOpacity : 1}>

      <View
        testID='contentContainer'
        style={[styles.contentContainer, contentContainerStyle]}>
        {text1?.length > 0 && (
          <View>
            <Text
              testID='text1'
              style={[styles.text1, text1Style]}>
              {text1}
            </Text>
          </View>
        )}
        {text2?.length > 0 && (
          <View>
            <Text
              testID='text2'
              style={[styles.text2, text2Style]}
              numberOfLines={text2NumberOfLines}>
              {text2}
            </Text>
          </View>
        )}
      </View>

      {trailingIcon && (
        <TouchableOpacity
          testID='trailingIcon'
          style={[styles.trailingIconContainer, trailingIconContainerStyle]}
          onPress={onTrailingIconPress}
          activeOpacity={onTrailingIconPress ? activeOpacity : 1}>
          {/*<Icon
            style={{ ...styles.trailingIcon, ...trailingIconStyle }}
            source={trailingIcon}
          />*/}
          { trailingIcon }
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

BaseToast.propTypes = {
  trailingIcon: Icon.propTypes.source,
  text1: PropTypes.string,
  text2: PropTypes.string,
  onPress: PropTypes.func,
  onTrailingIconPress: PropTypes.func,
  style: stylePropType,
  trailingIconContainerStyle: stylePropType,
  trailingIconStyle: stylePropType,
  contentContainerStyle: stylePropType,
  text1Style: stylePropType,
  text2Style: stylePropType,
  activeOpacity: PropTypes.number,
  text1NumberOfLines: PropTypes.number,
  text2NumberOfLines: PropTypes.number
};

BaseToast.defaultProps = {
  trailingIcon: icons.close,
  text1: undefined,
  text2: undefined,
  onPress: undefined,
  onTrailingIconPress: undefined,
  style: undefined,
  trailingIconContainerStyle: undefined,
  trailingIconStyle: undefined,
  contentContainerStyle: undefined,
  text1Style: undefined,
  text2Style: undefined,
  activeOpacity: 0.8,
  text1NumberOfLines: 1,
  text2NumberOfLines: 2
};

export default BaseToast;
