import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Hero from "./Hero";
import Descriptors from "./Descriptors";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm <strong className="main-name"> Andy Chen</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Descriptors />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Hero />
    </section>
  );
}

export default Home;