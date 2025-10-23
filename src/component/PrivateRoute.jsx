import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({children}) => {
    const {isAuth} = useContext(AuthContext);
    const {isAuthenticated,loginWithRedirect} = useAuth0();

    // If user is not authenticated, trigger the auth0 login redirect.
    if(!isAuthenticated){
        loginWithRedirect();
        return null;
    }

    return children;
}

export default PrivateRoute
