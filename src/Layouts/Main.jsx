import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SignUp from "../Components/SignUp";
import payments from "../Assets/Images/payments.png";
import promotion from "../Assets/Images/promotion.png";
import rfid from "../Assets/Images/rfid.png";
import analysis from "../Assets/Images/analysis.png";
import ExploreButton from "../Components/ExploreButton";
import Carousel from "../Components/Carousel";
import CarouselControl from "../Components/CarouselControl";
import Button from "../Components/Button";
import { ArrowRight } from "react-bootstrap-icons";

export default function Main() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };
  return (
    <main className="App-main">
      <Container className="p-5">
        <section className="main-top">
          <Row className="p-5">
            <Col md="12" lg className="m-auto p-5">
              <h2 className="typo-solid-blue">
                <span className="typo-empty-blue">How zicket</span> Works
              </h2>
            </Col>
            <Col md="12" lg className="m-auto p-5">
              <p>
                Our Hong Kong and Singapore based experts will help get your
                event set-up and selling tickets quickly and easily.
              </p>
            </Col>
          </Row>
        </section>
        <section className="main-center">
          <ol className="typo-ol">
            <li>
              <Row className="p-5">
                <Col md="12" lg className="p-5">
                  <Card bg="primary" className="border-0">
                    <Card.Img alt="Payments" src={payments} />
                  </Card>
                </Col>
                <Col md="12" lg className="p-5 m-auto">
                  <h4>Set up & Payments</h4>
                  <p>
                    Quickly build your dedicated events page in English &
                    Chinese. Accept payments from all major providers through
                    our safe and reliable checkout.
                  </p>
                  <ExploreButton />
                </Col>
              </Row>
            </li>
            <li>
              <Row className="p-5 ">
                <Col md="12" lg className="p-5 m-auto">
                  <h4>Progress & Promotion</h4>
                  <p>
                    View sales & audience data in real-time. Maximise event
                    reach via Zicket’s Social Media channels, eDM Database and
                    partner network.
                  </p>
                  <ExploreButton />
                </Col>
                <Col xs={{ order: 1 }} md="12" lg className="p-5 m-auto">
                  <Card bg="primary" className="border-0">
                    <Card.Img alt="Promotion" src={promotion} />
                  </Card>
                </Col>
              </Row>
            </li>
            <li>
              <Row className="p-5">
                <Col md="12" lg className="p-5">
                  <Card bg="primary" className="border-0">
                    <Card.Img alt="RFID" src={rfid} />
                  </Card>
                </Col>
                <Col md="12" lg className="p-5 m-auto">
                  <h4>Entry & RFID</h4>
                  <p>
                    Quickly build your dedicated events page in English &
                    Chinese. Accept payments from all major providers through
                    our safe and reliable checkout.
                  </p>
                  <ExploreButton />
                </Col>
              </Row>
            </li>
            <li>
              <Row className="p-5 ">
                <Col md="12" lg className="p-5 m-auto">
                  <h4>Support & Analysis</h4>
                  <p>
                    View sales & audience data in real-time. Maximise event
                    reach via Zicket’s Social Media channels, eDM Database and
                    partner network.
                  </p>
                  <ExploreButton />
                </Col>
                <Col xs={{ order: 1 }} md="12" lg className="p-5 m-auto">
                  <Card bg="primary" className="border-0">
                    <Card.Img alt="Analysis" src={analysis} />
                  </Card>
                </Col>
              </Row>
            </li>
          </ol>
        </section>
      </Container>
      <section className="main-bottom p-5">
        <Container className="p-5">
          <Row className="p-5">
            <Col md="12" lg className="m-auto p-5">
              <h2 className="typo-solid-white">
                <span className="typo-empty-white">Our</span> clients
              </h2>
              <p className="text-white">
                We’ve supported all kinds of events from large to small and we
                can help yours too.
              </p>
            </Col>
            <Col md="12" lg className="m-auto p-5 text-center">
              <CarouselControl />
            </Col>
          </Row>
          <div className="p-5">
            <Carousel />
          </div>
          <section className="text-center p-5">
            <Button color="white" variant="border">
              View All Clients <ArrowRight color="blue" size={15} />
            </Button>
          </section>
          <section className="text-center p-5">
            <h2 className="typo-solid-white">
              <span className="typo-empty-white">Try Zicket</span> Today
            </h2>
            <p className="text-white">
              Join thousands of other events planners and start selling tickets
              to your event.
            </p>
            <div className="p-5">
              <Button color="white" variant="border" onClick={openModal}>
                Sign up <ArrowRight color="blue" size={15} />
              </Button>
            </div>
          </section>
        </Container>
      </section>
      <SignUp modal={modal} setModal={setModal} />
    </main>
  );
}
