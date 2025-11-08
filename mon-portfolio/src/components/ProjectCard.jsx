import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <Link to={`/project/${project.id}`} className="view-details">
        Voir les détails
      </Link>
    </div>
  );
};

export default ProjectCard;