/***********************
ProtectedRoute Component:
*************************
This is the ProtectedRoute component is used to protect certain routes in our application
from users who don't have the proper authentication. This lets us choose which routes users 
can visit based on whether they are logged in. It checks if the token is present or not 
and based on that it redirects the page.
 **************/

//IMPORT SCRIPTS
import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;