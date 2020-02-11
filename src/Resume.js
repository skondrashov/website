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
      <div>
        <div className="section">
          <div className="title">Experience</div>
          <div className="item">
            <div className="workplace">
              <div className="project">Lulu’s Fashion Lounge<br/>Data Engineer</div>
              <div className="dates">05/2019 - 12/2019</div>
            </div>
            <div className="description">Data warehouse management and data analysis.</div>
            <ul>
              <li>Data analysis and pipelining for company stakeholders</li>
              <li>Python, Alooma, Snowflake, MySQL, Looker</li>
            </ul>
          </div>
          <div className="item">
            <div className="workplace">
              <div className="project">Nexient, Ann Arbor<br/>Software Engineer</div>
              <div className="dates">08/2016 - 04/2019</div>
            </div>
            <div className="description">Develop and maintain primarily web software for enterprise clients using Agile systems.</div>
            <ul>
              <li>Remote client communication was a major focus</li>
            </ul>
            <div className="nexient-item">
              <div className="nexient-workplace">Client: Williams-Sonoma International</div>
              <div className="nexient-description">Front-end engineering for some of the highest traffic ecommerce websites in the world.</div>
              <ul>
                <li>Updating legacy website to function as a Single Page Application</li>
                <li>Performed on-site presentations and consultation on SPA code design</li>
                <li>React, ES6, Dojo, SASS, Web-components</li>
              </ul>
            </div>
            <div className="nexient-item">
              <div className="nexient-workplace">Client: Lulu’s Fashion Lounge</div>
              <div className="nexient-description">Front and back-end engineering for an ecommerce website.</div>
              <ul>
                <li>Feature development and code design was the focus of this work</li>
                <li>Linux, MySQL, PHP, Zend, Cron, Javascript, SCSS, JQuery</li>
              </ul>
            </div>
            <div className="nexient-item">
              <div className="nexient-workplace">Hackathon Project: Room Reservation App</div>
              <div className="nexient-description">Front and back-end engineering for an ecommerce website.</div>
              <ul>
                <li>Vue.js app for room reservation using a voice recognition web service</li>
                <li>Linux, MySQL, PHP, Zend, Cron, Javascript, SCSS, JQuery</li>
              </ul>
            </div>
          </div>
          <div className="item">
            <div className="workplace">
              <div className="project">Barracuda Networks, Ann Arbor<br/>Software Engineer</div>
              <div className="dates">June 2014 - May 2015</div>
            </div>
            <div className="description">Developed and maintained features for the Barracuda Backup Appliance.</div>
            <ul>
              <li>Refactored and optimized PHP backend code for the web interface</li>
              <li>Performed SQL database maintenance and interfacing</li>
              <li>Identified bugs and performance issues through customer collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </flex-right>
    <hr/>
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
          <li>Google Cloud Storage/Compute Engine LAMP stack</li>
        </ul>
      </div>
      <div className="item">
        <div className="workplace">
          <div className="project">Chess Evaluation Network</div>
          <div className="dates">github.com/tkondrashov/GM2020</div>
        </div>
        <div className="description">Evaluation network for chess positions based on CNN techniques.</div>
        <ul>
          <li>Python with Keras for data analysis and C++ for data generation</li>
        </ul>
      </div>
    </div>
  </div>);
};
