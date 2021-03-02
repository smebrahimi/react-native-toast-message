import React from 'react';
import BaseToast from './base';

function ErrorToast(props) {
  return (
    <BaseToast
      {...props}
    />
  );
}

ErrorToast.propTypes = BaseToast.propTypes;

export default ErrorToast;
