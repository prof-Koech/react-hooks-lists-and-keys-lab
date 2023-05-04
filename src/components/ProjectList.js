import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectsList= projects.map((projectName)=>(
    <ProjectItem
    key={projectName.id}
    name={projectName.name}
    about={projectName.about}
    technologies={projectName.technologies}
  />
  ))
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsList}</div>
    </div>
  );
}

export default ProjectList;
