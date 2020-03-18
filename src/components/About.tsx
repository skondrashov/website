import React from 'react';
import { NavLink } from 'react-router-dom';

export default () =>
  <div className="About feed">
    <section>
      <p>I built this website with React and SCSS and hosted it on gcloud. You can find all of the code on my github:</p>
      <figure><a href="https://github.com/tkondrashov/website">https://github.com/tkondrashov/website</a></figure>
      <p>I chose to build and design most of the site in standard ways, but to be creative with some of the code too.</p>
    </section>
    <section>
      <h2>React</h2>
      <p>The project was initialized with create-react-app, and built with React functional components. The <NavLink to="/blog">Blog</NavLink> shows off some React concepts, including connecting to a database API, propagating that connection through the project using Context and a Higher Order Component, and reading new posts using function component Hooks.</p>
      {/* <figure>
        { <a href="https://github.com/tkondrashov/website">https://github.com/tkondrashov/website</a> }
        { <a href="https://github.com/tkondrashov/website">https://github.com/tkondrashov/website</a> }
      </figure> */}
    </section>
    <section>
      <h2>CSS</h2>
      <p>The site is styled with SCSS, but mostly uses standard CSS features. Responsiveness is achieved mostly with vw and vh units and the min() and max() CSS functions. Media queries collapse the resume into a single column on smaller screens. For better or for worse, all design choices are my own - no Bootstrap, no plugins, no imported stylesheets (except for a CSS reset).</p>
    </section>
    <section>
      <h2>SCSS</h2>
      <p>The main SCSS features that I use on the site are nesting, variables and @import. I have found those features to be very helpful in organizing code while being easy to understand for developers new to a project. Nesting allows files to be organized in a hierarchy that reflects the DOM and can be easier to understand. Variables make using color palettes easy and @import allows the code to be spread across multiple files.</p>
    </section>
    <section>
      <h2>Firebase</h2>
      <p>Any information I have that references a database uses a Firebase Firestore (currently, this is all in the <NavLink to="/blog">Blog</NavLink>). I have little to say about Firebase except that it does its job flawlessly. Everything that should be abstracted away for a developer is safely behind an API call with an extensive documentation, so it guarantees tested features and uptime while saving the work of developing any of those things yourself. Handy!</p>
    </section>
  </div>
;
