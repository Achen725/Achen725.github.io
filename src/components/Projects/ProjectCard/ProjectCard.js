import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  Stack,
  BtnGroup,
  CardLeft,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn"
                href={list.code_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Snippet
              </a>
              <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Other
              </a>
            </BtnGroup>
          </CardLeft>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;