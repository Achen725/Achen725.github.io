import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import TechStack from "./SkillSet/TechStack";
import ToolStack from "./SkillSet/ToolStack";
import LanguageStack from "./SkillSet/LanguageStack";


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
              About <strong className="purple">me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
          </Col>
        </Row>
        <h1 className="project-heading">
          Tools and <strong className="purple">Technologies </strong>
        </h1>
        <TechStack />
        <h1 className="project-heading">
          Proficient <strong className="purple">Programming Languages </strong>
        </h1>
        <LanguageStack />
        <h1 className="project-heading">
          <strong className="purple">Software</strong> I use
        </h1>
        <ToolStack />
      </Container>
    </Container>
  );
}

export default About;