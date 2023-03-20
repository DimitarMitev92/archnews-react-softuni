//REACT
import { useState, useContext, useEffect } from 'react';

//REACT COMPONENTS
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';

//REACT ROUTER
import { useNavigate } from 'react-router-dom';

//SERVICES
import { logout } from '../../../../services/auth.js';

export const Logout = () => {

    const navigate = useNavigate();

    const { auth, loginUser } = useContext(AuthContext);

    useEffect(() => {
        logout(auth.accessToken)
            .then(() => {
                navigate('/');
                loginUser({ auth: {} }, loginUser);
            })
            .catch(() => navigate('/'));
    }, []);
};