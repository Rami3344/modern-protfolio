import React, { useEffect, useState } from "react";
import me from "./cont/me.jpg";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Services from "./Services";
function Home() {
  return (
    <div className="home">
      <div className="main">
        <div className="home-container">
          <div className="me animation">
            <img src={me} />
            <h1>Rami Tounsi</h1>
            <p>@rami_tounsy</p>
            <ul>
              <li>Twitter</li>
              <li>Discord</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className="hello animation">
            <div className="helloh3">
              <h3>
                Hello, I’m <span style={{ color: "#6fa0bd" }}>Rami Tounsi</span>
                , Front-end Developer and UX / UI Designer Based in Tunisia.
              </h3>
            </div>
            <div className="exps">
              <div className="exp1">
                <span> Years Of Experience</span>
                <h2>4</h2>
              </div>
              <div className="exp2">
                <span>Programing Languages Skilled In</span>
                <h2>6</h2>
              </div>
            </div>
          </div>
        </div>
        <About />
        <Projects />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
