import React, { Component } from "react";

export default class my extends Component {
  render() {
    return (
      <div id="projects">
        <h1>Projects</h1>
        <p>
          Here are some of the projects I have made so far. Many more to come
          <span role="img" aria-label="simley">
            😀
          </span>
        </p>

        <section className="center-section">
          <h1>CLI Quiz about me.</h1>
          <p>
            I made this small CLI Quiz app which contains some questions about
            me. I used readline-sync plugin and JavaScript.
          </p>
          <a
            className="links"
            href="https://repl.it/@replSakshi/know-me?embed=1&output=1.#index.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play Quiz
          </a>
          <a
            className="links"
            href="https://repl.it/@replSakshi/know-me#index.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </section>
        <section className="center-section">
          <h1>F.R.I.E.N.D.S Quiz</h1>
          <p>
            Made another quiz app about one of my all time favorite TV show. I
            used the same technologies as the earlier CLI app except I added
            some styling to this one using an amazing plugin called "CHALK".
          </p>
          <a
            className="links"
            href="https://repl.it/@replSakshi/end-game?embed=1&output=1.#index.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play Quiz
          </a>
          <a
            className="links"
            href="https://repl.it/@replSakshi/end-game#index.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </section>
        <section className="center-section">
          <h1>Banana Translator</h1>
          <p>
            I made this fun translator using which you can convert plain English
            into the language of Minions called Banana.I used the API from
            funtranslations.com and the code is written using vanilla JS,CSS and
            HTML. Go ahead and try the banana way of talking!
          </p>
          <a
            className="links"
            href="https://confident-roentgen-6817c7.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore
          </a>
          <a
            className="links"
            href="https://github.com/scjuly19/translator.git/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </section>
        <section className="center-section">
          <h1>Emoji Interpreter</h1>
          <p>
            Made this simple React app which gives out the meaning of different
            emojis as the user inputs any emoji or taps on the emoji.
          </p>
          <a
            className="links"
            href="https://nqv27.csb.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore
          </a>
          <a
            className="links"
            href="https://codesandbox.io/s/cool-curran-nqv27?file=/src/App.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </section>
        <section className="center-section">
          <h1>Countdown Timer</h1>
          <p>
            I made this project as a solution to a challenge on
            {" "}
            <a
              href="https://www.frontendmentor.io/solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>FrontEnd Mentor</strong>
            </a>{" "}. Technologies used are HTML,CSS and
            JavaScript. The responsiveness was handled using CSS grid and CSS
            flexbox. I brushed up my knowledge of CSS and JavaScript via this
            project.
          </p>
          <a
            className="links"
            href="https://compassionate-cori-632b72.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore
          </a>
          <a
            className="links"
            href="https://github.com/scjuly19/launch-countdown-timer-main.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </section>
        <section className="center-section">
          <h1>Design of Landing Page for crowdfund website</h1>
          <p>
            Designed this beautiful landing page as a solution to a challenge on{" "}
            <a
              href="https://www.frontendmentor.io/solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>FrontEnd Mentor</strong>
            </a>{" "}
            .This was designed with a mobile first approach. I wanted to learn
            SCSS basics so I styled this webpage using SCSS and learned a lot
            about the fundamentals of SCSS like variables,mixins,extends and partials. Still a lot
            to learn though but off to a good start!
          </p>
          <a
            className="links"
            href="https://tender-minsky-dc3c00.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore
          </a>
          <a
            className="links"
            href="https://github.com/scjuly19/crowdfunding-product-page-main.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </section>
      </div>
    );
  }
}
