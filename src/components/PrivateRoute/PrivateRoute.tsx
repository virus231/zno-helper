import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import {authSelector} from "../../store/selectors";


interface Props extends RouteProps {
    component: any;
}

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
    const {token} = useSelector(authSelector)


    return(
        <Route {...rest} render={props => token ? <Component {...props} /> : <Redirect to="/login" />} />
    );
}

export default PrivateRoute;