import { Container, Row, Col, Card } from "react-bootstrap";
import payments from "../Assets/Images/payments.png";
import promotion from "../Assets/Images/promotion.png";

export default function Main() {
  return (
    <main className="App-main">
      <Container className="p-5">
        <Row className="p-5">
          <Col md="12" lg className="m-auto p-5">
            <h2 className="typo-solid-blue">
              <span className="typo-empty-blue">How zicket</span> Works
            </h2>
          </Col>
          <Col md="12" lg className="m-auto p-5">
            <p>
              Our Hong Kong and Singapore based experts will help get your event
              set-up and selling tickets quickly and easily.
            </p>
          </Col>
        </Row>
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
                  Quickly build your dedicated events page in English & Chinese.
                  Accept payments from all major providers through our safe and
                  reliable checkout.
                </p>
                <p>Explore features</p>
              </Col>
            </Row>
          </li>
          <li>
            <Row className="p-5 ">
              <Col md="12" lg className="p-5 m-auto">
                <h4>Progress & Promotion</h4>
                <p>
                  View sales & audience data in real-time. Maximise event reach
                  via Zicket’s Social Media channels, eDM Database and partner
                  network.
                </p>
                <p>Explore features</p>
              </Col>
              <Col xs={{ order: 1 }} md="12" lg className="p-5 m-auto">
                <Card bg="primary" className="border-0">
                  <Card.Img alt="Promotion" src={promotion} />
                </Card>
              </Col>
            </Row>
          </li>
        </ol>

        <Row className="main-bottom"></Row>
      </Container>
    </main>
  );
}
