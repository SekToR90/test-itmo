import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const ProtectedRoute = ({isAuth, component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { noAuthRedirected: true },
            }}
          />
        )
      }
    </Route>
  );
};

const mapStateToProps = (state) => ({
    isAuth: state.users.isAuth
  })
  
  export default connect(mapStateToProps)(ProtectedRoute)