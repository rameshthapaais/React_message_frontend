import React from 'react';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
    const navigate = useNavigate();


    const handleLogout = () => {
   
        navigate('/');
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
