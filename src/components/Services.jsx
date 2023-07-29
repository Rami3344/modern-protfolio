import React from "react";
import web from "./cont/web.png";
import design from "./cont/design.png";
function Services() {
  return (
    <div className="services">
      <h1>Services</h1>
      <hr />
      <div className="cards">
        <div className="card">
          <h2>Front-End Web Development</h2>
          <img src={web} />
        </div>
        <div className="card">
          <h2>Gfx Design</h2>
          <img src={design} />
        </div>
      </div>
    </div>
  );
}

export default Services;
