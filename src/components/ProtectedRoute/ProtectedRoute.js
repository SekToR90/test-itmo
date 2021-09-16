import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

const ProtectedRoute = ({component: Component, ...props }) => {
  const isAuth = useSelector((state) => state.users.isAuth)

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
  
  export default ProtectedRoute