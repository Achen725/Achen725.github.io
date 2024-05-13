import React from "react";
import { JobList } from "../../../data/JobData";
import {
  Card,
  Stack,
} from "./JobCardElements";
function JobCard() {
  return (
    <>
      {JobList.map((roleList, index) => (
          <Card key={index}>
            <h4>{roleList.title}</h4>
            <p>{roleList.description}</p>            

            {roleList.projects.length !== 0 && <h5>Projects</h5>}<br />
                          
            {roleList.projects.map((projectsList, index2) => (
                <>      
                   <Stack>
                    <span className="stackTitle">Project {index2 + 1}:</span>
                    {projectsList?.description}
                   </Stack>
                    <Stack>
                      <span className="stackTitle">Tech Stack:</span>
                      <span className="tags">{projectsList?.tech_stack}</span>
                    </Stack>
                </>
                )
              )
            }
          </Card>
        )
      )
    }
    </>
  );
}

export default JobCard;