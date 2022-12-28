import logo from "../Assets/Images/logo.svg";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="navbar-container">
        <div className="navbar-toggler">
          <a className="navbar-toggler-icon" href="#!">
            <span></span>
          </a>
        </div>

        <div className="navbar-collapse" id="navbarContent">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#clients">
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#news">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faqs">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Button color="pink" variant="solid">
        GET ZICKET
      </Button>
    </nav>
  );
}

// <button
//   className="navbar-toggler"
//   type="button"
//   data-bs-toggle="collapse"
//   data-bs-target="#navbarContent">
//   <span className="navbar-toggler-icon"></span>
// </button>
