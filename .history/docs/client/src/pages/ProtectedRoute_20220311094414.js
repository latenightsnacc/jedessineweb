import { Component } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = ({component: Component, ...rest}) => {

    const { auth } = useAuth();

    return(
        <Route
            {...rest}
            render={(props) => {
                if(auth) {
                    return <Component {...rest} {...props} />
                } else {
                    return(
                        <Navigate to={}
                    )
                }
            }}
        />
    )
}