import React from 'react';
import { NavLink } from "react-router-dom";
import ThemeContext from './ThemeContext'

export default () =>
  <ThemeContext.Consumer>
    {theme =>
      <nav>
        <flex-right>
          <flex-right>
            <NavLink activeClassName="active" to="/" exact>Home</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/resume">Resume</NavLink>
          </flex-right>
        </flex-right>
      </nav>
    }
  </ThemeContext.Consumer>
;
