import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRoute = () => ({ 
    isAuthenticaded,
    component: Component,
    ...rest 
}) => {

    return (
        <Route { ...rest }
            component={ (props)  => (
                ( !isAuthenticaded )
                    ? <Component {...props} />
                    : <Redirect to='/' />
                    
            )}
        
        />
    )
}
