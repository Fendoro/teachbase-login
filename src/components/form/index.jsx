import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const customForm = (props) => {
  const { children, header } = props;
  return (
    <div className="form-block">
      <h1 className="header text-center">{header}</h1>
      {children}
    </div>
  );
};

customForm.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};

export default customForm;
