import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiJava,
} from "react-icons/di";

import { SiKotlin } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function LanguageStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h3>Expert (Industry Experience) </h3>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus />
        </Col>

        <h3>Proficient (can ramp-up easily w/ Documentation)</h3>
        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <TbBrandGolang />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiKotlin />
        </Col>
    </Row>
  );
}

export default LanguageStack;