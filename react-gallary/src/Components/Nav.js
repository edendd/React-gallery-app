import React from 'react';
import { NavLink } from 'react-router-dom';
// the nav links under the search bar
const Nav = () => (
    <nav className="main-nav">
        <ul className="main-nav">
            <li> <NavLink to="/cats">Cats</NavLink></li>
            <li> <NavLink to="/dogs">Dogs</NavLink></li>
            <li> <NavLink to="/birds">Birds</NavLink></li>
        </ul>
    </nav>
);

export default Nav;