import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/new">New note</NavLink>
        </nav>
    );
};

export default Navigation;