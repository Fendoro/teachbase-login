import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const requiredValidator = value => (value
  ? undefined
  : 'Required');
const minLengthValidator = min => value => (value && value.length < min
  ? `Must be ${min} characters or more`
  : undefined);
const emailValidator = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined);

class SigninForm extends Component {
  static propTypes = {
    signinUser: PropTypes.func.isRequired,
    minLength: PropTypes.number,
    errorMessage: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    minLength: 5,
    errorMessage: '',
  };

  handleFormSubmit = ({ email, password, remember }) => {
    this.props.signinUser({ email, password }, remember);
  }

  minLength = value => (minLengthValidator(this.props.minLength)(value));

  renderEmail = ({
        input,
    label,
    type,
    placeholder,
    meta: { touched, error },
      }) =>
    (<fieldset key={label} className="form-group">
      <label className="text-muted">{label}</label>
      <input {...input} placeholder={placeholder} type={type} className="form-control" />
      {touched && error && <div className="error">{error}</div>}
    </fieldset>);

  renderPassword = ({
        input,
    label,
    type,
    placeholder,
    meta: { touched, error },
    }) =>
    (<fieldset key={label} className="form-group">
      <div className="d-flex justify-content-between">
        <label className="text-muted">{label}</label>
        <Link className="reset-password" to="\reset">Forgot your password?</Link>
      </div>
      <input {...input} placeholder={placeholder} type={type} className="form-control" />
      {touched && error && <div className="error">{error}</div>}
    </fieldset>);

  renderRemember = ({ input, label, type }) => (
    <label className="remember checkbox-inline"><input {...input} type={type} />{label}</label>
  );

  renderAlert() {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Ooops!</strong> {errorMessage}
        </div>
      );
    }
    return null;
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form className="signin d-flex flex-column" onSubmit={handleSubmit(this.handleFormSubmit)} >
        <Field
          name="email"
          type="email"
          component={this.renderEmail}
          label="Email"
          placeholder="test@example.com"
          validate={[requiredValidator, this.minLength, emailValidator]}
        />
        <Field
          name="password"
          type="password"
          component={this.renderPassword}
          label="Password"
          placeholder="Qwerty123"
          validate={[requiredValidator, this.minLength]}
        />
        <Field
          name="remember"
          type="checkbox"
          component={this.renderRemember}
          label="Remember me"
        />
        <button action="submit" className="btn btn-success text-uppercase signin" disabled={submitting}>Login</button>
        {this.renderAlert()}
      </form >
    );
  }
}

export default reduxForm({
  form: 'signin',
})(SigninForm);
