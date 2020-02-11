import './flexElements'
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './Nav';
import Main from './Main';
import './App.scss';


export default () =>
  <div className="App">
    <Switch>
      <Route path="/resume" />
      <Route path="/*" component={Nav} />
    </Switch>
    <Main/>
  </div>
;
