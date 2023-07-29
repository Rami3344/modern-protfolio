import React from "react";
import HTML from "./cont/html.png";
import CSS from "./cont/css.png";
import JAVASCRIPT from "./cont/javascript.png";
import REACT from "./cont/react.png";
import NODE from "./cont/node.png";
import SQL from "./cont/sql.png";
import PYTHON from "./cont/python.png";
import ILLUSTRATOR from "./cont/illustrator.png";
import PHOTOSHOP from "./cont/photshop.png";
import cod from "./cont/coding.png";
import des from "./cont/design.png";
import dj from "./cont/dj.png";
import vg from "./cont/videogames.png";
function About() {
  return (
    <div className="about">
      <div className="sec1">
        <h1>About Me</h1>
        <hr />
        <div className="para">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            voluptatibus sequi laudantium rem expedita commodi ullam qui ut
            nemo. Voluptatibus ab numquam neque a fuga laudantium perspiciatis
            magni dignissimos non.
          </p>
        </div>
      </div>
      <div className="sec2">
        <h1>Skills</h1>
        <hr />
        <div className="skills">
          <div className="skill skill1">
            <p>95%</p>
            <h2>HTML</h2>
            <img src={HTML} />
          </div>
          <div className="skill skill2 ">
            <p>80%</p>
            <h2>CSS</h2>
            <img src={CSS} />
          </div>
          <div className="skill skill3">
            <p>80%</p>
            <h2>Javascript</h2>
            <img src={JAVASCRIPT} />
          </div>
          <div className="skill skill4">
            <p>80%</p>
            <h2>React</h2>
            <img src={REACT} />
          </div>
          <div className="skill skill5">
            <p>40%</p>
            <h2>Node</h2>
            <img src={NODE} />
          </div>
          <div className="skill skill6">
            <p>70%</p>
            <h2>SQL</h2>
            <img src={SQL} />
          </div>
          <div className="skill skill7">
            <p>60%</p>
            <h2>Python</h2>
            <img src={PYTHON} />
          </div>
          <div className="skill skill8">
            <p>70%</p>
            <h2>Photoshop</h2>
            <img src={PHOTOSHOP} />
          </div>
          <div className="skill skill9">
            <p>50%</p>
            <h2>Illustrator</h2>
            <img src={ILLUSTRATOR} />
          </div>
        </div>
      </div>
      <div className="sec3">
        <div className="hobbies">
          <h1>Hobbies</h1>
          <hr />
          <div className="hobby">
            <div>
              <h2>Coding</h2>
              <img src={cod} />
            </div>
            <div>
              <h2>GFX Design</h2>
              <img src={des} />
            </div>
            <div>
              <h2>Dj</h2>
              <img src={dj} />
            </div>
            <div>
              <h2>Playing Video Games</h2>
              <img src={vg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
