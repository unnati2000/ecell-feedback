import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        <h1>Not Authenenticated</h1>
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
