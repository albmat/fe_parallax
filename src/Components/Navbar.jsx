import { useState } from "react";
import logo from "../Assets/Images/logo.svg";
import Button from "./Button";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <a className="nav-brand" href="/">
          <img src={logo} alt="logo" />
        </a>
        <button
          className={isNavExpanded ? "nav-toggler toggled" : "nav-toggler"}
          type="button"
          onClick={() => {
            setIsNavExpanded((curr) => !curr);
          }}>
          <span className="nav-toggler-icon"></span>
        </button>

        <div
          className={isNavExpanded ? "nav-collapse collapsed" : "nav-collapse"}>
          <ul className="nav-list">
            <li className="nav-list-item">
              <a className="nav-list-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-list-item">
              <a className="nav-list-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-list-item">
              <a className="nav-list-link" href="#clients">
                Clients
              </a>
            </li>
            <li className="nav-list-item">
              <a className="nav-list-link" href="#news">
                News
              </a>
            </li>
            <li className="nav-list-item">
              <a className="nav-list-link" href="#faqs">
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
