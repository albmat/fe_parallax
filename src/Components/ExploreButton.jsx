import { ArrowRight } from "react-bootstrap-icons";

export default function ExploreButton() {
  return (
    <section className="explore">
      Explore features
      <button className="btn explore-btn" type="button">
        <span className="explore-btn-outer-circle">
          <span className="explore-btn-inner-circle">
            <ArrowRight size={15} className="explore-btn-icon" />
          </span>
        </span>
      </button>
    </section>
  );
}
