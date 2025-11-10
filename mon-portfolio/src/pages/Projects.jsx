import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../Styles/Projects.css';


const projectsData = [
  {
    id: 1,
    title: "Dashboard Business Intelligence",
    description: "Tableau de bord interactif pour l'analyse des performances commerciales avec Power BI et SQL.",
    technologies: ["Power BI", "SQL", "Excel", "DAX"],
    category: "data"
  },
  {
    id: 2,
    title: "Application de Gestion de Projets",
    description: "Application web responsive pour la gestion et le suivi des projets d'équipe.",
    technologies: ["React", "Node.js", "MongoDB", "CSS"],
    category: "web"
  },
  {
    id: 3,
    title: "App Mobile de Gestion des Contacts",
    description: "Application mobile complète pour organiser et gérer vos contacts professionnels avec synchronisation cloud et scan OCR.",
    technologies: ["React Native", "SQLite"],
    category: "mobile"
  },
  {
    id: 4,
    title: "Système de Recommendation Data",
    description: "Algorithme de recommendation basé sur l'analyse de données utilisateurs.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    category: "data"
  },
  {
  id: 5,
  title: "DevOnDeck - Plateforme de Développeurs",
  description: "Marketplace connectant développeurs freelances et entreprises pour des missions tech.",
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
  category: "web"
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">Mes Projets</h1>
        <p className="projects-subtitle">
          Découvrez mes réalisations en Business Intelligence, développement web et mobile
        </p>
      </div>

      {/* Filtres */}
      <div className="filter-section">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <i className="fas fa-layer-group"></i> Tous les projets
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            <i className="fas fa-globe"></i> Développement Web
          </button>
          <button 
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            <i className="fas fa-mobile-alt"></i> Applications Mobile
          </button>
          <button 
            className={`filter-btn ${filter === 'data' ? 'active' : ''}`}
            onClick={() => setFilter('data')}
          >
            <i className="fas fa-chart-bar"></i> Business Intelligence
          </button>
        </div>
        
        <div className="filter-info">
          <span className="projects-count">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} 
            {filter !== 'all' && ` en ${getCategoryLabel(filter)}`}
          </span>
        </div>
      </div>

   
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <i className="fas fa-inbox"></i>
          <h3>Aucun projet trouvé</h3>
          <p>Aucun projet ne correspond à la catégorie "{getCategoryLabel(filter)}".</p>
          <button 
            className="reset-filter-btn"
            onClick={() => setFilter('all')}
          >
            Voir tous les projets
          </button>
        </div>
      )}
    </div>
  );
};


const getCategoryLabel = (category) => {
  const labels = {
    all: 'tous',
    web: 'développement web',
    mobile: 'applications mobile', 
    data: 'business intelligence'
  };
  return labels[category] || category;
};

export default Projects;