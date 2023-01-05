import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carnival from "../Assets/Images/carousel/aia-carnival.jpg";
import overvation from "../Assets/Images/carousel/hong-kong-overvation-wheel.jpg";
import prudential from "../Assets/Images/carousel/prudential-marina-bay.jpg";
import circus from "../Assets/Images/carousel/the-great-circus-of-europe.jpg";

export default function CarouselContainer() {
  const [slideIndex, setSlideIndex] = useState(1);
  const carousel = [
    {
      src: overvation,
      title: "landmark",
      footer: "Hong Kong Observation Wheel",
    },
    { src: carnival, title: "carnival", footer: "AIA Carnival" },
    {
      src: prudential,
      title: "carnival",
      footer: "Prudential Marina Bay Carnival",
    },
    { src: circus, title: "circus", footer: "The Great Circus of Europe" },
  ];

  return (
    <div className="carousel-container">
      {carousel.map((pic, i) => {
        return (
          <div key={i} className="carousel-figure m-2">
            <p className="carousel-text carousel-title">{pic.title}</p>
            <img src={pic.src} alt={`Pic-${i}`} className="carousel-pic" />
            <p className="carousel-text">{pic.footer}</p>
          </div>
        );
      })}
    </div>
  );
}
