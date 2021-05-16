import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import {authSelector} from "../../store/selectors";


interface Props extends RouteProps {
    component: any;
    isPublic?: boolean;
}

const PageRoute: FC<Props> = ({ component: Component,isPublic = false, ...rest }) => {
    const { token } = useSelector(authSelector)
    console.log('got token',{token})

    if(!isPublic)
    return(
        <Route {...rest} render={props => token ? <Component {...props} /> : <Redirect to="/login" />} />
        );
    else
        return (
            <Route {...rest} render={props => !token ? <Component {...props} /> : <Redirect to="/home" />} />
            );
    
}

export default PageRoute;