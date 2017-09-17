import React from 'react';
import PropTypes from 'prop-types';

const socialsAuth = (props) => {
  const { socials } = props;
  return (<div className="socials-auth-block d-flex flex-column">
    <h6 className="text-muted text-center">with</h6>
    <div className="socials">
      {socials.map(({ provider }) => (
        <button key={provider} className={`social border rounded ${provider}`}>
          <i className={`fa fa-${provider}`} />
        </button>
      ))}
    </div>
  </div>);
};

socialsAuth.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default socialsAuth;
