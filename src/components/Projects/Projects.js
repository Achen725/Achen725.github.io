import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard/ProjectCard";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Parallel Floyd-Steinberg Dithering"
              date="(Mar 2021 - May 2021)"
              description="Explored performance improvements forthe Floyd-Steinberg dithering algorithm using several paralleziation frameworks. In our exploration, we profiled different methodlogies (CUDA, OpenMP, and OpenMPI) to identify different bottlenecks and accuracy tradeoffs to achieve higher performance thresholds."
              code_url="https://github.com/nvogety/parallel-floyd-steinberg"
              paper_link="https://docs.google.com/document/d/1e9hQsZrjP1aweggbUoPkjiHk1IwG9WGd/edit#heading=h.gjdgxs"                     
             />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;