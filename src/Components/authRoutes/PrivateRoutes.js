import React from 'react'
import {Route,Redirect} from 'react-router-dom';
export default function PrivateRoutes({
    user,
    component:Comp,
    ...rest
}) {
    return (
        <Route {...rest} component={(props)=>(user?<Comp {...rest} user={user}/>:<Redirect to="/sign_in"/>)} />
    )
}
