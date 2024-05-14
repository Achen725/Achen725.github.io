import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             Hi I'm <span className="purple">Andy Chen </span>
            <br />
            I am currently employed as a Software Engineer!
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Investing (Disclaimer: Not an Advisor)
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Poker
            </li>
            <li className="about-activity">
              <ImPointRight /> Animation
            </li>
          </ul>         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;