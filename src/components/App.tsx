import './flexElements.ts'
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './Nav.jsx';
import Main from './Main';
import './styles/App.scss';
import useDarkMode from '../useDarkMode'
import { provideFirebase } from './withFirebase'

export default provideFirebase(() => {
  const darkmode = useDarkMode();
  return <div className={`App ${darkmode.theme}`}>
    <Switch>
      <Route path="/resume" />
      <Route path="/*" component={Nav}/>
    </Switch>
    <Main/>
    <Switch>
      <Route path="/resume" />
      <Route path="/*">
        <div id="darkmode" onClick={darkmode.toggleTheme}><div/></div>
      </Route>
    </Switch>
  </div>
});
