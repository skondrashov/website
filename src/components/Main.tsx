import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume.jsx";
import Blog from "./Blog";

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </main>
);

export default Main;
