import './flexElements'
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './Nav';
import Main from './Main';
import './App.scss';
import useDarkMode from './useDarkMode'
import ThemeContext from './ThemeContext'

export default () => {
  const [ theme, toggleTheme ] = useDarkMode();
  return <ThemeContext.Provider>
    <div className={"App "+theme}>
      <Switch>
        <Route path="/resume" />
        <Route path="/*" component={Nav}/>
      </Switch>
      <Main/>
      <Switch>
        <Route path="/resume" />
        <Route path="/*">
          <div id="darkmode" onClick={toggleTheme}><div/></div>
        </Route>
      </Switch>
    </div>
  </ThemeContext.Provider>
};
