import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Investments from "./Investments";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Random <strong className="purple">Hobbies</strong>
            </h1>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
          </Col>
        </Row>
        <Row>
            <Investments/>
        </Row>
      </Container>
    </Container>
  );
}

export default About;