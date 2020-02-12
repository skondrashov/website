import React from 'react';
import { NavLink } from "react-router-dom";

export default () => {
  return (<div className="Resume">
    <NavLink to="/">
      <flex-right class="header">
        <flex-down class="contact">
          <div className="website"><div>tkondrashov.net</div></div>
          <div><div>tkondrashov@gmail.com</div></div>
          <div><div>(734) 634-8753</div></div>
        </flex-down>
        <div className="name">Timofey<br/>Kondrashov</div>
      </flex-right>
    </NavLink>
    <flex-right class="columns">
      <flex-down>
        <div className="section">
          <div className="title">Home Projects</div>
          <div className="item">
            <flex-down class="workplace">
              <div class="project">Twitter Event Detector</div>
              <a href="https://github.com/tkondrashov/ThisMinute" class="dates">github.com/tkondrashov/ThisMinute</a>
            </flex-down>
            <div className="description">NLP deep learning system for analyzing statistically unusual patterns in geotagged tweets.</div>
            <ul>
              <li>Low level optimization through C++ STL data structures and multithreading</li>
              <li>Twitter API Stream through PHP Phirehose library</li>
              <li>Google Cloud Storage/Compute Engine LAMP stack</li>
            </ul>
          </div>
          <div className="item">
            <flex-down class="workplace">
              <div class="project">Chess Evaluation Network</div>
              <a href="https://github.com/tkondrashov/GM2020" className="dates">github.com/tkondrashov/GM2020</a>
            </flex-down>
            <div class="description">Evaluation network for chess positions based on CNN techniques.</div>
            <ul>
              <li>Python with Keras for data analysis and C++ for data generation</li>
            </ul>
          </div>
        </div>
        <div class="section">
          <div class="title">Education</div>
          <div class="item">
            <div class="workplace">
              <div>University of Michigan, CSE</div>
              <div class="dates">2013</div>
            </div>
            <div class="workplace">
              <div>Washtenaw Comm. College</div>
              <div class="dates">2010</div>
            </div>
          </div>
        </div>
      </flex-down>
      <flex-down>
        <div className="section">
          <div className="title">Experience</div>
          <div className="item">
            <div className="workplace">
              <div className="project">Data Engineer at Lulu’s Inc in Chico, CA (Remote)</div>
              <div className="dates">05/19 - 12/19</div>
            </div>
            <div className="description">Data warehousing and analysis for a retail outlet</div>
            <ul>
              <li>Curated a database of 24 million customer records</li>
              <li>Led development of customer email segmentation pipeline</li>
              <li>Analyzed and retrieved data for company stakeholders</li>
              <li>Python, Alooma, Snowflake, MySQL, Looker</li>
            </ul>
          </div>
          <div className="item">
            <div className="workplace">
              <div className="project">Software Engineer at Nexient in Ann Arbor, MI</div>
              <div className="dates">08/16 - 04/19</div>
            </div>
            <div className="description">Architected software for enterprise clients using Agile systems</div>
            <div className="nexient-item">
              <div className="nexient-workplace">Client: Williams-Sonoma International</div>
              <div className="nexient-description">Engineered high traffic ecommerce websites</div>
              <ul>
                <li>Updated legacy website into a Single Page Application</li>
                <li>Trained 100+ engineers in single-page architecture</li>
                <li>React, ES6, Dojo, SASS, Web-components</li>
              </ul>
            </div>
            <div className="nexient-item">
              <div className="nexient-workplace">Client: Lulu’s Fashion Lounge</div>
              <div className="nexient-description">Took ownership of full-stack projects for a retail website</div>
              <ul>
                <li>Designed and developed customer-facing features</li>
                <li>Linux, MySQL, PHP, Zend, Cron, Javascript, SCSS, JQuery</li>
              </ul>
            </div>
            <div className="nexient-item">
              <div className="nexient-workplace">Hackathon Project: Room Reservation App</div>
              <div className="nexient-description">Front and back-end engineering for an ecommerce website.</div>
              <ul>
                <li>Vue.js app for room reservation using voice recognition</li>
                <li>Linux, MySQL, PHP, Zend, Cron, Javascript, SCSS, JQuery</li>
              </ul>
            </div>
          </div>
          <div className="item">
            <div className="workplace">
              <div className="project">Software Engineer, Barracuda Networks in Ann Arbor, MI</div>
              <div className="dates">06/14 - 05/15</div>
            </div>
            <div className="description">Developed features for the Barracuda Backup Appliance.</div>
            <ul>
              <li>Refactored and optimized PHP backend code for the web interface</li>
              <li>Performed SQL database maintenance and interfacing</li>
              <li>Identified performance issues through customer collaboration</li>
            </ul>
          </div>
        </div>
      </flex-down>
    </flex-right>
    <div className="section">
      <div className="title">Home Projects</div>
      <div className="item">
        <div className="workplace">
          <div className="project">Twitter Event Detector</div>
          <div className="dates">github.com/tkondrashov/ThisMinute</div>
        </div>
        <div className="description">NLP deep learning system for analyzing statistically unusual patterns in geotagged tweets.</div>
        <ul>
          <li>Low level optimization through C++ STL data structures and multithreading</li>
          <li>Twitter API Stream through PHP Phirehose library</li>
        </ul>
      </div>
    </div>
  </div>);
};
