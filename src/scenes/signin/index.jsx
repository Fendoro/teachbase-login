import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import CustomForm from '../../components/form';
import SocialsAuth from './components/signin-socials';
import SigninForm from './components/signin-form';
import './styles.css';

export const Signin = props => (
  <CustomForm header="Login">
    {props.withSocials && <SocialsAuth {...props} />}
    <SigninForm {...props} />
  </CustomForm>
);

Signin.propTypes = {
  withSocials: PropTypes.bool,
};

Signin.defaultProps = {
  withSocials: false,
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(Signin);
