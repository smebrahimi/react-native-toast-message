import React from 'react';

import BaseToast from './base';
import { icons } from '../assets';
import colors from '../colors';

function InfoToast(props) {
  return (
    <BaseToast
      {...props}
      style={{ borderLeftColor: colors.lightSkyBlue }}
    />
  );
}

InfoToast.propTypes = BaseToast.propTypes;

export default InfoToast;
