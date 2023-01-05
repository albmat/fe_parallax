import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
export default function CarouselControl() {
  return (
    <div>
      <a
        className="left carousel-control p-4"
        href="#carousel-single"
        data-slide="prev">
        <span className="carousel-control-btn-outer-circle">
          <span className="carousel-control-btn-inner-circle">
            <MdOutlineArrowBackIos
              size={15}
              color="white"
              className="carousel-control-btn-icon"
            />
          </span>
        </span>
      </a>
      <a
        className="right carousel-control p-4"
        href="#carousel-single"
        data-slide="next">
        <span className="carousel-control-btn-outer-circle">
          <span className="carousel-control-btn-inner-circle">
            <MdOutlineArrowForwardIos
              size={15}
              color="white"
              className="carousel-control-btn-icon"
            />
          </span>
        </span>
      </a>
    </div>
  );
}
