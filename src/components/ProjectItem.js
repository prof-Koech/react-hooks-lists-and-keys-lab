import React from "react";

function ProjectItem({ name, about, technologies }) {
//use map to iterate over technology list
  const techList = technologies.map((techItems) => (
    <span key={techItems}>{techItems}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techList }
      </div>
    </div>
  );
}

export default ProjectItem;
