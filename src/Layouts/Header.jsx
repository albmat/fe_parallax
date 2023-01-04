import { useState } from "react";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Thumbnail from "../Components/Thumbnail";
import VideoModal from "../Components/VideoModal";
import { ArrowRight } from "react-bootstrap-icons";

export default function Header() {
  const [modal, setModal] = useState(false);

  return (
    <header className="header">
      <section className="header-top">
        <p className="header-top-paragraph">
          Looking to buy tickets to an event?{" "}
          <a className="header-top-link" href="/">
            Get them here
          </a>
        </p>
      </section>
      <Navbar />
      <section className="header-center">
        <h1 className="header-title typo-empty">Make your event a success</h1>
        <p>
          Zicket handles all the hassle of selling tickets for every type of
          event.
        </p>
        <Button color="pink" variant="border">
          Get Started <ArrowRight color="white" size={15} />
        </Button>
      </section>
      <section className="header-bottom">
        <hr />
        <p>
          Over 3,000,000 Tickets Sold at some of Asia's Top Events Last Year
        </p>
        <Thumbnail modal={modal} setModal={setModal} />
      </section>
      <VideoModal modal={modal} setModal={setModal} />
    </header>
  );
}
