import React from 'react';
import PropTypes from 'prop-types';

const app = props => (<div>
  {props.children}
</div>);

app.propTypes = {
  children: PropTypes.node.isRequired,
};

export default app;
