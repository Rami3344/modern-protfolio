import React from "react";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <h1>Rambo</h1>
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>

          <li>
            <a href="#">More...</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
