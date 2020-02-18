import React from 'react';

export default () =>
  <div className="About feed">
    <section>
      <p>I built this website with React and Sass and hosted it on gcloud. You can find all of the code on my github:</p>
      <figure><a href="https://github.com/tkondrashov/website">https://github.com/tkondrashov/website</a></figure>
      <p>I chose to build and design most of the site in standard ways, but to be creative with some of the code too.</p>
    </section>
    <section>
      <h2>React</h2>
      <p>The project was initialized with create-react-app, and built with React functional components.</p>
    </section>
    <section>
        <h2>CSS</h2>
        <p>The site is styled with SCSS, but mostly uses standard CSS features. Responsiveness is achieved mostly with vw and vh units and the min() and max() CSS functions. Media queries collapse the resume into a single column on smaller screens.</p>
      </section>
    <section>
      <h2>SCSS</h2>
      <p>The main SCSS features that I use on the site are nesting, variables and @import. I have found those features to be very helpful in organizing code while being easy to understand for developers new to a project. Nesting allows files to be organized in a hierarchy that reflects the DOM and can be easier to understand. Variables make using color palettes easy and @import allows the code to be spread across multiple files.</p>
    </section>
  </div>
;
