import React from "react";

export default function Blogs() {
  return (
    <div id="blogs" className="alignContent">
      <h2 className="sub-title">Blogs</h2>
      <p>
        I like to write and document my learning sometimes. Here is a glimpse of
        blogs written by me.
      </p>
      <section className="center-section">
        <h2>Getting started with your first project in React-Native.</h2>
        <p>
          I wrote this blog when I started learning React Native and had to
          setup the project for the first time. It was quite complicated and so
          I thought of sharing the steps I followed so that others can have a
          hint which I didn't at the first time. In addition, it does help me to
          look back and refresh it at some point.
        </p>
        <a
          className="links"
          href="https://sakshichaudhry.medium.com/getting-started-with-your-first-project-in-react-native-d8b4357c37b5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read it here...
        </a>
      </section>
      <section className="center-section">
        <h2>How do Closures work in JavaScript?</h2>
        <p>
          I recently started learning some advance JavaScript concepts and
          closures is one of them. It took me sometime to get my head around
          these, so tried simplifying it and published this with nerd for tech
          on medium.
        </p>
        <a
          className="links"
          href="https://medium.com/nerd-for-tech/how-do-closures-work-in-javascript-32c15ed46bec"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read it here...
        </a>
      </section>
      <section className="center-section">
        <h2>Blogs on Hashnode</h2>
        <p>
          I have started writing some blogs on hashnode recently. You can find all of those at the below URL. Hashnode is a great platform to share and learn and that's the reason I decided to contribute through it.
        </p>
        <a
          className="links"
          href="https://sakshichaudhary.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's my hashnode blog..
        </a>
      </section>
    </div>
  );
}
