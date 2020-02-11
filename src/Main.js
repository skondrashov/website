import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Resume from './Resume'

export default () =>
  <main>
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/" component={Home} exact/>
    </Switch>
  </main>
;
