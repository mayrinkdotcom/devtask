import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../contexts/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  isPublic?: boolean;
  component: React.ComponentType;
}

export const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isPublic = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const path = `/${user?.role}/profile/${user?.id}`;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate === !!user || isPublic ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : path,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
