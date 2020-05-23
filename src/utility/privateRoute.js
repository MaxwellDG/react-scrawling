import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from '../context/context';

export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      {context => (
        <Route
          {...rest}
          render={props => context.isLoggedIn ? (
              <Component {...props} />
            ) : (
              <Redirect to={{pathname: '/error', state: { from: props.location }}} />
            )
          }
        />
    )}
    </Consumer>
  );
};