import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <>
          <h1> STORIES IDEAS </h1>
          <div className="links">
            <NavLink to="/top" activeClassName="mainlinks"> Top Stories </NavLink>
            <NavLink to="/new" activeClassName="mainlinks"> Latest Stories </NavLink>
            <NavLink to="/best" activeClassName="mainlinks"> Best Stories </NavLink>
          </div>
        </>
    );
}

export default Header;