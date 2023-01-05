import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Components/Button";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [placeholder, setHolder] = useState("jane.smith@example.com");

  return (
    <footer className="App-footer">
      <section className="footer-top">
        <Container className="p-5">
          <Row className="p-5">
            <Col md="12" lg="4" className="m-auto p-5 text-white">
              <h5>Stay up to date</h5>
              <p>Receive our latest news, announcements and offers.</p>
            </Col>
            <Col md="12" lg="8" className="m-auto p-5">
              <form className="d-flex justify-content-between">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onFocus={() => {
                    setHolder("");
                  }}
                  onBlur={() => {
                    setHolder("jane.smith@example.com");
                    setEmail("");
                  }}
                  className="footer-input"
                  placeholder={placeholder}></input>
                <div>
                  <Button color="blue" type="submit" variant="border">
                    SUBMIT
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footer-bottom">
        <Container className="p-5">
          <Row className="p-5">
            <Col md="12" lg="6">
              <div className="footer-container">
                <div className="footer-cell m-auto p-5 text-white">
                  <h6>Product</h6>
                  <ul className="footer-list">
                    <li className="footer-list-item">
                      <a href="/features">Features</a>
                    </li>
                    <li className="footer-list-item">
                      <a href="/clients">Clients</a>
                    </li>
                    <li className="footer-list-item">
                      <a href="/faqs">Faqs</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-cell m-auto p-5 text-white">
                  <h6>About</h6>
                  <ul className="footer-list">
                    <li className="footer-list-item">
                      <a href="/about">About</a>
                    </li>
                    <li className="footer-list-item">
                      <a href="/careers">Careers</a>
                    </li>
                    <li className="footer-list-item">
                      <a href="/news">News</a>
                    </li>
                    <li className="footer-list-item">
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-cell m-auto p-5 text-white">
                  <h6>Legal</h6>
                  <ul className="footer-list">
                    <li className="footer-list-item">
                      <a href="/terms&conditions">Terms & Conditions</a>
                    </li>
                    <li className="footer-list-item">
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li className="footer-list-item">
                      <a href="/security">Security</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md="12" lg="6" className="m-auto p-5 text-center">
              <Button color="pink" type="button" variant="border">
                Buy Tickets
              </Button>
              <p className="p-5 text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Col>
          </Row>
          <hr />
          <div className="d-flex text-white">
            <a href="https://www.facebook.com/" className="pe-4">
              <FaFacebookF size="20px" />
            </a>
            <a href="https://www.instagram.com/" className="pe-4">
              <FiInstagram size="20px" />
            </a>
            <p>COPYRIGHT 2019 ZICKET</p>
          </div>
        </Container>
      </section>
    </footer>
  );
}
