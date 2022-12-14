import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from 'react';

const PrivateNoUser = ({children}) => {

    const { user } = useSelector(state => state.authSlice);

    if(user !== undefined) return (
        !user ? children : <Navigate to="/"/>
    );
}

export default PrivateNoUser;
