import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/api';

const Logout = () => {
    const history = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        history('/login');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
