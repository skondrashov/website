import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () =>
  <nav>
    <flex-right>
      <flex-right>
        <NavLink activeClassName="active" to="/" exact>Home</NavLink>
        <NavLink activeClassName="active" to="/about">About</NavLink>
        <NavLink activeClassName="active" to="/resume">Resume</NavLink>
        <NavLink activeClassName="active" to="/blog">Blog</NavLink>
      </flex-right>
    </flex-right>
  </nav>
;

export default Nav;
