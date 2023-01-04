import thumb from "../Assets/Images/carousel/hong-kong-overvation-wheel.jpg";
import { BsPlay } from "react-icons/bs";

export default function Thumbnail({ modal, setModal }) {
  const openModal = () => {
    setModal(!modal);
  };

  return (
    <section className="thumb">
      <img alt="Video" className="thumb-img" src={thumb} />
      <div className="thumb-icon-circle" onClick={openModal}>
        <BsPlay className="thumb-icon-play" fadein="none" fontSize={"30px"} />
      </div>
    </section>
  );
}
