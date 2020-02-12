import React from 'react';
import { NavLink } from "react-router-dom";

export default () =>
  <nav>
    <flex-right>
      <NavLink activeClassName="active" to="/" exact>Home</NavLink>
      <NavLink activeClassName="active" to="/about">About</NavLink>
      <NavLink activeClassName="active" to="/resume">Resume</NavLink>
    </flex-right>
  </nav>
;
