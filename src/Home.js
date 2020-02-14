import React from 'react';
import { NavLink } from 'react-router-dom';

export default () =>
  <div className="Home">
    <section>
      <p>I'm Timofey Kondrashov. Welcome to my resume site! I tinker with websites and AI for a living and for fun. This website is about some of the things I've made or learned!</p>
    </section>

    <section>
      <h2>Web Development</h2>
      <p>Nearly all of my professional career has been in web development. I made this website to have some code samples of my <a href="https://github.com/tkondrashov/website/blob/master/src/App.js">React/JS</a> and <a href="https://github.com/tkondrashov/website/blob/master/src/Resume.scss">SASS</a> work and worked in a couple of <a href="https://github.com/tkondrashov/website/blob/master/src/flexElements.js">native Web Components</a> as well. I got exposure to all major frameworks during my time at Nexient, but ended up learning the most about React and regular JS, including Web Components.</p>
    </section>

    <section>
      <h2>Machine Learning</h2>
      <p>I got my start with machine learning several years ago when I came up with a project (later called ThisMinute) to analyze Tweets based on whether they seemed to be about a real life event. I learned that this was a sentiment analysis task, and tried to solve it using a clustering algorithm, to some success. This project bears some of <a href="https://github.com/tkondrashov/thisminute/blob/master/brain/pericog.cpp">my best C++ code</a> as well as some of <a href="https://github.com/tkondrashov/thisminute/blob/master/brain/models/pericog.py">my best Python code</a>.</p>
      <p>My most recent ML passion project is a chess engine called GM2020, which I am using to apply abstract concepts to deep learning and explore the propagation of information through CNN architectures. It contains <a href="https://github.com/tkondrashov/GM2020/blob/master/chess.ipynb">a Jupyter Notebook using Python with Keras</a> and some <a href="https://github.com/tkondrashov/GM2020/blob/master/positions.cc">more C++ code.</a></p>
      </section>

    <section>
      <h2>Online Presence</h2>
      <p>My most notable contribution to the online community is probably a <a href="https://stackoverflow.com/a/54819633/3648957">Stackoverflow answer discussing the getElement and querySelector APIs</a>. I put a lot of time into benchmarking and researching the differences after seeing performance issues on a work project, and found some behavior nobody seemed to be aware of, and it seems it really helped some people who came across it.</p>
      </section>

    <section>
      <h2>More</h2>
      <p>Take a look at the <NavLink to="/about">About page</NavLink> for some information about how I built this website or head over to my <NavLink to="/resume">resume</NavLink> for a summary of my most notable work!</p>
    </section>
  </div>
;
