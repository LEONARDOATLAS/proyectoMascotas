  import React, { useState, useEffect } from 'react';
  import { Route, Redirect } from 'react-router-dom';

  const PublicRoute = ({component: Component, restricted, ...rest}) => {
      const [loggedIn, setLoggedIn] = useState(false);
      
      useEffect(() => {
          const token = localStorage.getItem('token');
          if(token !== null) {
              setLoggedIn(true);
          }
      });

      return(
          <Route {...rest} render={props => (
              (loggedIn && restricted) ? <Redirect to="/" /> : <Component {...props}/>
          )}
          />
      );
  }

  export default PublicRoute;