import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

export default function VideoModal({ modal, setModal }) {
  const [videoLoading, setVideoLoading] = useState(true);

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return modal ? (
    <section className="modal__bg">
      <div className="modal__align">
        <div className="modal__content" modal={modal.toString()}>
          <IoCloseOutline
            className="modal__close"
            arial-label="Close modal"
            onClick={() => setModal(false)}
          />
          <div className="modal__video-align">
            {videoLoading ? (
              <div className="modal__spinner">
                <BiLoaderAlt className="modal__spinner-style" fadein="none" />
              </div>
            ) : null}
            <iframe
              className="modal__video-style"
              onLoad={spinner}
              loading="lazy"
              width="800"
              height="500"
              src="https://www.youtube.com/embed/4UZrsTqkcW4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  ) : null;
}
