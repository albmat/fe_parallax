import Navbar from "../Components/Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <p className="header-top-paragraph">
          Looking to buy tickets to an event?{" "}
          <a className="header-top-link" href="/">
            Get them here
          </a>
        </p>
      </div>
      <Navbar />
    </header>
  );
}
