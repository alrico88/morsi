import { Toast } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

function ToastHeader({ title }) {
  return (
    <Toast.Header>
      <span className="me-auto">{title}</span>
    </Toast.Header>
  );
}

ToastHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ToastHeader;
