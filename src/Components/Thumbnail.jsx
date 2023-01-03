import thumb from "../Assets/Images/carousel/hong-kong-overvation-wheel.jpg";
import { BsPlay } from "react-icons/bs";

export default function Thumbnail({ modal, setModal }) {
  const openModal = () => {
    setModal(!modal);
  };

  return (
    <section className="thumbnail">
      <img alt="Video" className="thumbnail-img" src={thumb} />
      <div className="thumbnail-icon-circle" onClick={openModal}>
        <BsPlay
          className="thumbnail-icon-play"
          fadein="none"
          fontSize={"30px"}
        />
      </div>
    </section>
  );
}
