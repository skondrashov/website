import React from 'react';
import { NavLink } from "react-router-dom";

const Resume = () =>
  <flex-down class="Resume">
    <NavLink to="/">
      <flex-right class="header">
        <flex-down class="contact">
          <div className="website"><div>⬅ skondrashov.net</div></div>
          <div><div>skondrashov@gmail.com</div></div>
          <div><div>(734) 634-8753</div></div>
        </flex-down>
        <div className="name">Sasha<br/>Kondrashov</div>
      </flex-right>
    </NavLink>
    <flex-right class="columns">
      <flex-down>
        <flex-down class="section">
          <div className="title">Projects</div>
          <div className="item">
            <flex-down class="workplace">
              <div className="project">Personal React Website</div>
              <a href="https://github.com/skondrashov/website">github.com/skondrashov/website</a>
            </flex-down>
            <div className="description">This website. Written with React and SCSS, with a couple of HTML5 custom elements.</div>
          </div>
          <div className="item">
            <flex-down class="workplace">
              <div className="project">Twitter Event Detector</div>
              <a href="https://github.com/skondrashov/ThisMinute">github.com/skondrashov/ThisMinute</a>
            </flex-down>
            <div className="description">Deep learning system for identifying statistically unusual patterns in geotagged tweets.</div>
            <ul>
              <li>Low level optimization through C++ STL data structures and multithreading</li>
            </ul>
          </div>
          <div className="item">
            <flex-down class="workplace">
              <div className="project">Chess Evaluation Network</div>
              <a href="https://github.com/skondrashov/GM2020">github.com/skondrashov/GM2020</a>
            </flex-down>
            <div className="description">Neural network for chess position evaluation based on Computer Vision techniques.</div>
          </div>
        </flex-down>
        <flex-down class="section">
          <div className="title">Education</div>
          <div className="item">
            <div className="workplace">
              <div>University of Michigan, CSE</div>
              <div className="dates">2013</div>
            </div>
            <div className="workplace">
              <div>Washtenaw Comm. College</div>
              <div className="dates">2010</div>
            </div>
          </div>
        </flex-down>
      </flex-down>
      <flex-down>
        <flex-down class="section">
          <div className="title">Experience</div>
          <div className="item">
            <div className="workplace">
              <div className="project">Data Engineer at Lulu’s Inc in Chico, CA (Remote)</div>
              <div className="dates">05/19 - 12/19</div>
            </div>
            <div className="description">Data warehousing and analysis for a retail outlet</div>
            <ul>
              <li>Led development of customer email segmentation pipeline</li>
              <li>Curated a database of 24 million customer records</li>
              <li>Analyzed and retrieved data for company stakeholders</li>
              <li>Python, Alooma, Snowflake, MySQL, Looker</li>
            </ul>
          </div>
          <div className="item">
            <div className="workplace">
              <div className="project">Senior Developer at Nexient in Ann Arbor, MI</div>
              <div className="dates">08/16 - 04/19</div>
            </div>
            <div className="description">Architected enterprise software and mentored developers</div>
            <div className="nexient-item">
              <div className="nexient-workplace">Client: Williams-Sonoma International</div>
              <div className="nexient-description">Engineered high traffic ecommerce websites</div>
              <ul>
                <li>Trained 100+ engineers in single-page architecture</li>
                <li>Updated legacy website into a Single Page Application</li>
                <li>React, ES6, Dojo, SCSS, Web-components</li>
              </ul>
            </div>
            <div className="nexient-item">
              <div className="nexient-workplace">Client: Lulu’s Fashion Lounge</div>
              <div className="nexient-description">Took ownership of full-stack projects for a retail website</div>
              <ul>
                <li>Designed and developed customer-facing features</li>
                <li>Linux, MySQL, PHP, Cron, Javascript, SCSS, JQuery</li>
              </ul>
            </div>
            <div className="nexient-item">
              <div className="nexient-workplace">Hackathon Project: Room Reservation App</div>
              <div className="nexient-description">Vue.js app for room reservation using voice recognition</div>
            </div>
          </div>
          <div className="item">
            <div className="workplace">
              <div className="project">Software Engineer at Barracuda in Ann Arbor, MI</div>
              <div className="dates">06/14 - 05/15</div>
            </div>
            <div className="description">Developed features for the Barracuda Backup Appliance</div>
            <ul>
              <li>Refactored and optimized PHP code for the web interface</li>
              <li>Performed SQL database maintenance and interfacing</li>
              <li>Identified performance issues through customer collaboration</li>
            </ul>
          </div>
        </flex-down>
      </flex-down>
    </flex-right>
    <flex-down class="section">
      <div className="title">Code Samples</div>
      <div className="item samples">
        <a href="https://github.com/skondrashov/website/blob/master/src/components/withFirebase.tsx">React, </a>
        <a href="https://github.com/skondrashov/website/blob/master/src/components/flexElements.ts">Custom Elements, </a>
        <a href="https://github.com/skondrashov/website/blob/master/src/components/styles/Resume.scss">SCSS, </a>
        <a href="https://github.com/skondrashov/thisminute/blob/develop/brain/pericog.cpp">C++, </a>
        <a href="https://github.com/skondrashov/thisminute/blob/develop/brain/models/pericog.py">Python, </a>
        <a href="https://github.com/skondrashov/GM2020/blob/master/chess.ipynb">Keras</a>
      </div>
    </flex-down>
    <flex-down class="section download">
      <div className="title"><a href="/resume.pdf">⤓ Download Printable PDF</a></div>
    </flex-down>
  </flex-down>
;

export default Resume;
