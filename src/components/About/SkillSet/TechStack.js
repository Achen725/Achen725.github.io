import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAws } from "react-icons/fa";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiSolidity,
  SiPostgresql,
  SiAmazondynamodb
} from "react-icons/si";

function TechStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h3>General Technologies</h3>
        <Col xs={4} md={2} className="tech-icons">
            <FaAws />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAmazondynamodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiRedis />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
        </Col>
    
        <h3>Web Frameworks</h3>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
        </Col>      
    </Row>
  );
}

export default TechStack;