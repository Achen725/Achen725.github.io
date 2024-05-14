import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.date}
        {"\n"}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {/* If the code link is shareable  */}

        {props.code_url && (
          <Button
            variant="primary"
            href={props.code_url}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Code Base"}
          </Button>
        )}

        {"\n"}
        {"\n"}  
  
        {/* If there is an article or paper for it  */}
        {props.paper_link && (
          <Button
            variant="primary"
            href={props.paper_link}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"See Paper for More Details"}
          </Button>
        )}

        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}



      </Card.Body>
    </Card>
  );
}
export default ProjectCards;