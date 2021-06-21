import React from 'react';
import { Redirect, Route } from 'react-router-dom'

export const PrivateRouter = ({
    isAuthenticaded,
    component: Component,
    ...rest 
}) => {

    localStorage.setItem('lastPath', rest.location.pathname )

    return (
        <Route { ...rest }
            component={ (props)  => (
                ( isAuthenticaded )
                    ? <Component {...props} />
                    : <Redirect to='/login' />
                    
            )}
        
        />
    )
}
