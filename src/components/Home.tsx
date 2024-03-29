import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => (
  <div className="Home feed">
    <section>
      <p>
        I'm Sasha Kondrashov. Welcome to my resume site! I tinker with websites
        and AI for a living and for fun. This website is about some of the
        things I've made or learned!
      </p>
    </section>

    <section>
      <h2>Web Development</h2>
      <p>
        Nearly all of my professional work has been in web development. I made
        this website to have some code samples of my{" "}
        <a href="https://github.com/skondrashov/website/blob/master/src/components/App.tsx">
          React/JS
        </a>{" "}
        and{" "}
        <a href="https://github.com/skondrashov/website/blob/master/src/components/styles/Resume.scss">
          SCSS
        </a>{" "}
        work and worked in a couple of{" "}
        <a href="https://github.com/skondrashov/website/blob/master/src/components/flexElements.ts">
          native Web Components
        </a>{" "}
        as well. I got exposure to all major frameworks during my time at
        Nexient, but ended up learning the most about React and regular JS,
        including Web Components. Take a look at{" "}
        <NavLink to="/about">the About page</NavLink> for a detailed desciption
        of the technologies used to make this site.
      </p>
    </section>

    <section>
      <h2>Machine Learning</h2>
      <p>
        I got my start with machine learning in 2015 when I came up with a
        project (later named ThisMinute) to analyze Tweets based on whether they
        seemed to be about a real life event. I learned that this was a
        sentiment analysis task, and tried to solve it using a clustering
        algorithm, to some success. This project bears some of{" "}
        <a href="https://github.com/skondrashov/thisminute/blob/master/brain/pericog.cpp">
          my best C++ code
        </a>{" "}
        as well as some of{" "}
        <a href="https://github.com/skondrashov/thisminute/blob/master/brain/models/pericog.py">
          my best Python code
        </a>
        .
      </p>
      <p>
        My most recent ML passion project is a chess engine called GM2020, which
        I am using to apply abstract concepts to deep learning and explore the
        propagation of information through CNN architectures. It contains{" "}
        <a href="https://github.com/skondrashov/GM2020/blob/master/chess.ipynb">
          a Jupyter Notebook using Python with Keras
        </a>{" "}
        and some{" "}
        <a href="https://github.com/skondrashov/GM2020/blob/master/positions.cc">
          more C++ code.
        </a>
      </p>
    </section>

    <section></section>

    <section>
      <h2>Online Presence</h2>
      <p>
        One of my contributions to the online community is{" "}
        <a href="https://stackoverflow.com/a/54819633/3648957">
          this Stackoverflow answer
        </a>{" "}
        discussing the getElement and querySelector APIs in client-side JS. I
        put a lot of time into benchmarking and researching the differences
        after seeing performance issues on a work project and found some
        behavior nobody seemed to be aware of, and it seems it really helped
        some people who came across it.
      </p>
      <p>
        I have made some contributions across open source projects, including
        minor contributions to Tensorflow and rocket.rs.
      </p>
    </section>

    <section>
      <h2>More</h2>
      <p>
        Take a look at the <NavLink to="/about">About page</NavLink> for some
        information about how I built this website or head over to my{" "}
        <NavLink to="/resume">resume</NavLink> for a summary of my most notable
        work!
      </p>
    </section>
  </div>
);

export default Home;
