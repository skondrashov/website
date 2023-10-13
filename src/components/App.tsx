import "./flexElements";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Main from "./Main";
import "./styles/App.scss";
import useDarkMode from "../useDarkMode";
import { provideFirebase } from "./withFirebase";

export default provideFirebase(() => {
  const darkmode = useDarkMode();
  return (
    <div className={`App ${darkmode.theme}`}>
      <Routes>
        <Route path="/resume" />
        <Route path="/*" element={<Nav />} />
      </Routes>
      <Main />
      <Routes>
        <Route path="/resume" />
        {/* <Route path="/*">
        </Route> */}
      </Routes>
      <div id="darkmode" onClick={darkmode.toggleTheme}>
        <div />
      </div>
    </div>
  );
});
