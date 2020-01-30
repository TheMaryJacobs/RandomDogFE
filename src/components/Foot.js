import React from "react";
import "./Foot.css";
import Logo from "../MJlogo.png";

function Foot() {
  return (
    <footer className="footer">
      <div className="row footcontent">
        <div className="col">
          <img className="logo" alt="Mary Jacobs Logo" src={Logo} />
        </div>
        <div className="col">
          <p>Built for fun by</p>
          <a
            alt="Mary Jacobs portfolio link"
            href="https://themaryjacobs.github.io/ThePortfolio/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3>Mary Jacobs</h3>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
