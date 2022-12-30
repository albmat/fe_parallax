import { useState } from "react";
import logo from "../Assets/Images/logo.svg";
import Button from "./Button";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
        </a>
        <button
          className={
            isNavExpanded ? "navbar-toggler toggled" : "navbar-toggler"
          }
          type="button"
          onClick={() => {
            console.log("hello");
            setIsNavExpanded((curr) => !curr);
          }}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={
            isNavExpanded ? "navbar-collapse collapsed" : "navbar-collapse"
          }>
          <ul className="navbar-nav">
            <li className="navbar-nav-item">
              <a className="navbar-nav-link" href="#about">
                About
              </a>
            </li>
            <li className="navbar-nav-item">
              <a className="navbar-nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="navbar-nav-item">
              <a className="navbar-nav-link" href="#clients">
                Clients
              </a>
            </li>
            <li className="navbar-nav-item">
              <a className="navbar-nav-link" href="#news">
                News
              </a>
            </li>
            <li className="navbar-nav-item">
              <a className="navbar-nav-link" href="#faqs">
                FAQs
              </a>
            </li>
          </ul>
          <div>
            <Button color="pink" variant="solid">
              GET ZICKET
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
