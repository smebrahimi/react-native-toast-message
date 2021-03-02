import React from 'react';
import BaseToast from './base';

function SuccessToast(props) {
  return (
    <BaseToast
      {...props}
    />
  );
}

SuccessToast.propTypes = BaseToast.propTypes;

export default SuccessToast;
