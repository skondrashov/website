import React from 'react';
import { NavLink } from "react-router-dom";

export default () =>
  <nav>
    <NavLink activeClassName='active' to="/" exact='true'>Home</NavLink>
    <NavLink activeClassName='active' to="/about">About</NavLink>
    <NavLink activeClassName='active' to="/blog">Blog</NavLink>
    <NavLink activeClassName='active' to="/resume">Resume</NavLink>
  </nav>
;
