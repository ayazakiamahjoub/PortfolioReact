import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../Styles/Projects.css';

// Exemple de données de projets
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
    title: "App Mobile de Suivi Fitness",
    description: "Application mobile pour le suivi des activités sportives et nutritionnelles.",
    technologies: ["React Native", "Firebase", "Chart.js"],
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
    title: "Site E-commerce",
    description: "Plateforme de vente en ligne avec panier et système de paiement.",
    technologies: ["React", "Express.js", "Stripe", "PostgreSQL"],
    category: "web"
  },
  {
    id: 6,
    title: "App de Méditation",
    description: "Application mobile de méditation guidée avec suivi des progrès.",
    technologies: ["React Native", "Firebase", "Audio API"],
    category: "mobile"
  }
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

      {/* Grille de projets */}
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

// Helper function pour les labels des catégories
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