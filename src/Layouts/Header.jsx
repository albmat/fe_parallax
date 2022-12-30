import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import { ArrowRight } from "react-bootstrap-icons";

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
      <div className="header-center">
        <h1 className="header-title">Make your event a success</h1>
        <p>
          Zicket handles all the hassle of selling tickets for every type of
          event.
        </p>
        <Button color="pink" variant="border">
          Get Started <ArrowRight color="white" size={15} />
        </Button>
      </div>
      <div className="header-bottom">
        <hr />
        <p>
          Over 3,000,000 Tickets Sold at some of Asia's Top Events Last Year
        </p>
        <iframe
          title="Video"
          className="header-bottom-video"
          width="190"
          height="115"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div>
    </header>
  );
}
