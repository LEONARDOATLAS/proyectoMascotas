 import React , { useState, useEffect } from 'react';
 import { Route, Redirect } from 'react-router-dom';

 const PrivateRoute = ({component: Component, ...rest}) => {

     const [loggedIn, setLoggedIn] = useState(false);

     useEffect(() => {
         const token = localStorage.getItem('token');
         if(token !== null) {
             setLoggedIn(true);
         }
     });

     return(
         <Route {...rest} render={props => (
             loggedIn ? <Component {...props} /> : <Redirect to="/longin" />
         )} 
         />
     )
 }

 export default PrivateRoute;