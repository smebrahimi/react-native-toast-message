import React from 'react';
import BaseToast from './base';

function InfoToast(props) {
  return (
    <BaseToast
      {...props}
    />
  );
}

InfoToast.propTypes = BaseToast.propTypes;

export default InfoToast;
