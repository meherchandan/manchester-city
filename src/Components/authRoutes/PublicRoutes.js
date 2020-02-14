import React from 'react'
import {Route,Redirect} from 'react-router-dom';
export default function PublicRoutes({
    user,
    component:Comp,
    ...rest
}) {
    return (
        <Route {...rest} component={()=>(
            rest.restricted?
            (user?
                <Redirect to="/dashboard" />:
                <Comp {...rest} user={user}/>
            ) :
        <Comp {...rest} user={user}/>)}/>
    )
}
