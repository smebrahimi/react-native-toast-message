/* eslint-env jest */

import { render } from '@testing-library/react-native';
import React from 'react';

import colors from '../../colors';
import { icons } from '../../assets';
import ErrorToast from '../error';

describe('test ErrorToast component', () => {
  it('renders style correctly', () => {
    const { queryByTestId } = render(<ErrorToast />);
    const rootView = queryByTestId('rootView');

    expect(rootView).toHaveStyle({
      borderLeftColor: colors.blazeOrange
    });
  });
});
