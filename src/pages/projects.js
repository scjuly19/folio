import React, { Component } from "react";

export default class my extends Component {
  render() {
    return (
      <div id="projects" className="alignContent">
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
            href="https://github.com/scjuly19/know-me.git"
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
            href="https://github.com/scjuly19/end-game.git"
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
            href="https://talk-banana-to-me.netlify.app/"
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
          <h1>Flag Interpreter</h1>
          <p>
            Made this simple React app which gives out the country name of
            different flags as the user inputs any flag or taps on any of the
            flags.
          </p>
          <a
            className="links"
            href="https://find-the-country.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore
          </a>
          <a
            className="links"
            href="https://github.com/scjuly19/country-flag.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </section>
        <section className="center-section">
          <h1>Countdown Timer</h1>
          <p>
            I made this project as a solution to a challenge on{" "}
            <a
              href="https://www.frontendmentor.io/solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>FrontEnd Mentor</strong>
            </a>{" "}
            . Technologies used are HTML,CSS and JavaScript. The responsiveness
            was handled using CSS grid and CSS flexbox. I brushed up my
            knowledge of CSS and JavaScript via this project.
          </p>
          <a
            className="links"
            href="https://counting-days.netlify.app/"
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
            about the fundamentals of SCSS like variables,mixins,extends and
            partials. Still a lot to learn though but off to a good start!
          </p>
          <a
            className="links"
            href="https://support-crowdfund.netlify.app/"
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
        <section className="center-section">
          <h1>Verify IFSC</h1>
          <p>
            I made this web app to verify the ifsc code of any bank in India. I
            came up with this when i faced the difficulty in validating a ifsc
            code before making any transaction. I made use of React to make this
            website and styled the components using emotionJs. This project was
            setup using parcel and babel from scratch in order to learn the
            fundamentals behind building a project. I gained a understanding of
            development tools like parcel, babel, ESLint and prettier through
            this project.In order to fetch the bank details, I have used a
            public API made by <b>Razorpay</b>. Its a very simple to use API
            which gets you details of a bank based on the ifsc code.
          </p>
          <a
            className="links"
            href="https://verify-ifsc.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore
          </a>
          <a
            className="links"
            href="https://github.com/scjuly19/verify-ifsc.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </section>
        <section className="center-section">
          <h1>ToDo List</h1>
          <p>
            This website was made to add list of items the user want to
            accomplish. The user can add,delete and mark the task as done once
            the task is completed. This has support for dark and light theme.
            There are filters to filter the tasks based n the status of the
            tasks. I used NextJs to make the app components as I wanted to learn
            the basics behind it. I learned what is NextJs and what is server
            side rendering. I am still in the process of learning it thought but
            this was just a starter. To store the list, I made use of google
            firebase as a database. I learned how to add and remove data to
            firebase.
          </p>
          <a
            className="links"
            href="https://tasks-checklist.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore
          </a>
          <a
            className="links"
            href="https://github.com/scjuly19/todo.git"
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
