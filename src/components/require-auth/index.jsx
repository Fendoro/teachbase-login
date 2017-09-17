import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object,
    }

    static propTypes = {
      authenticated: PropTypes.bool,
    }

    static defaultProps = {
      authenticated: false,
    }

    componentWillMount() {
      this.checkAuth(this.props.authenticated);
    }

    componentWillUpdate(nextProps) {
      this.checkAuth(nextProps.authenticated);
    }

    checkAuth(isAuth) {
      if (!isAuth) {
        this.context.router.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
