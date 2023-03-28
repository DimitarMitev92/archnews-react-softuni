//REACT
import { useContext } from 'react';
//REACT ROUTER
import { Navigate, Outlet } from 'react-router-dom';
//CONTEXT
import { AuthContext } from '../../contexts/authContext.js';


export const RouteGuard = () => {

    const { auth } = useContext(AuthContext);

    if (!auth._id) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};