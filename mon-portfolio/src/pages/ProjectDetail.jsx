import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/ProjectDetail.css';


const projectsData = [
  {
    id: 1,
    title: "Dashboard Business Intelligence",
    subtitle: "Tableau de bord interactif pour l'analyse des données",
    fullDescription: "Développement d'un dashboard BI complet permettant aux entreprises d'analyser leurs performances commerciales en temps réel. Le projet inclut la collecte de données depuis multiples sources, le traitement ETL, et la création de visualisations interactives avec Power BI. Les utilisateurs peuvent suivre les KPI clés, générer des rapports automatiques et prendre des décisions data-driven.",
    technologies: ["Power BI", "SQL", "Excel", "DAX", "Python", "Azure Data Factory"],
    category: "Business Intelligence",
    duration: "4 mois",
    status: "Terminé",
    date: "Mai 2024",
    links: {
      github: "https://github.com/username/project1",
      demo: "https://demo-project1.com",
      documentation: "https://docs.project1.com"
    }
  },
  {
    id: 2,
    title: "Application de Gestion de Projets",
    subtitle: "Solution collaborative pour équipes agile",
    fullDescription: "Application web moderne permettant aux équipes de collaborer efficacement sur leurs projets. Fonctionnalités incluant la gestion des tâches avec diagrammes de Gantt, calendrier partagé, chat en temps réel, stockage de documents, et rapports de progression automatisés. Interface responsive optimisée pour desktop et mobile.",
    technologies: ["React", "Node.js", "MongoDB", "CSS", "JWT"],
    category: "Développement Web",
    duration: "4 mois",
    status: "En cours",
    date: "Mars 2024",
    links: {
      github: "https://github.com/username/project2",
      demo: "https://demo-project2.com"
    }
  },
  {
    id: 3,
    title: "App Mobile de Gestion des Contacts",
    subtitle: "Solution complète pour organiser vos relations professionnelles",
    fullDescription: "Application mobile intuitive de gestion de contacts professionnels permettant de centraliser et organiser toutes vos relations. Fonctionnalités avancées incluant la synchronisation avec l'annuaire du téléphone, le scan de cartes de visite via OCR, la catégorisation intelligente des contacts, et les rappels automatiques pour le suivi des relations. Interface moderne avec recherche rapide et gestions des groupes.",
    technologies: ["React Native", "Firebase", "SQLite"],
    category: "Application Mobile",
    duration: "3 mois",
    status: "Terminé",
    date: "Février 2025",
    links: {
      github: "https://github.com/username/contact-manager",
      demo: "https://demo-contactapp.com"
  }
},
{
id: 4,
  title: "Système de Recommendation Data",
  subtitle: "Algorithme intelligent pour des recommandations personnalisées",
  fullDescription: "Développement d'un système de recommandation avancé utilisant des techniques de machine learning pour analyser le comportement des utilisateurs et fournir des suggestions personnalisées. Le système intègre du traitement de données massives, de la segmentation d'audience et des algorithmes de filtrage collaboratif. Il permet d'augmenter l'engagement utilisateur de 35% grâce à des recommandations pertinentes et contextuelles.",
  technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter", "NumPy", "Matplotlib"],
  category: "Data Science",
  duration: "3 mois",
  status: "Terminé",
  date: "Mars 2024",
  links: {
    github: "https://github.com/username/recommendation-system",
    demo: "https://demo-recommendation.com",
    documentation: "https://docs-recommendation.com"
  }
},

{
id: 5,
  title: "DevOnDeck - Plateforme de Développeurs",
  subtitle: "Marketplace connectant talents tech et opportunités professionnelles",
  fullDescription: "Plateforme web innovante permettant aux développeurs freelances de présenter leurs compétences et aux entreprises de trouver les talents tech dont elles ont besoin. DevOnDeck facilite la mise en relation grâce à un système de matching intelligent, des outils de collaboration intégrés et un processus de paiement sécurisé. La plateforme inclut un système de reviews, de messagerie en temps réel et de gestion de projets.",
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "JWT", "Cloudinary", "Redis"],
  category: "Développement Web",
  duration: "5 mois",
  status: "Terminé",
  date: "Avril 2024",
  links: {
    github: "https://github.com/username/devondeck",
    demo: "https://devondeck-demo.com",
    live: "https://devondeck.com"
  }
}

];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-not-found">
          <i className="fas fa-exclamation-triangle"></i>
          <h2>Projet non trouvé</h2>
          <p>Le projet que vous recherchez n'existe pas ou a été déplacé.</p>
          <Link to="/projects" className="back-to-projects">
            <i className="fas fa-arrow-left"></i>
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      
      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <span className="project-category">{project.category}</span>
      </div>

      
      <div className="project-content">
       
        <div className="project-main">
          <div className="project-description">
            <h2 className="section-title">
              <i className="fas fa-file-alt"></i>
              Description du projet
            </h2>
            <p className="project-full-description">{project.fullDescription}</p>
            
           
            <div className="project-objectives">
              <h3 className="section-title">
                <i className="fas fa-bullseye"></i>
                Objectifs atteints
              </h3>
              <ul className="objectives-list">
                <li>Création d'une solution complète et intuitive</li>
                <li>Amélioration de l'efficacité des processus métier</li>
                <li>Fourniture d'analyses data-driven pour la prise de décision</li>
                <li>Interface utilisateur moderne et responsive</li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="project-sidebar">
         
          <div className="technologies-section">
            <h3 className="section-title">
              <i className="fas fa-code"></i>
              Technologies utilisées
            </h3>
            <div className="technologies-grid">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag-large">{tech}</span>
              ))}
            </div>
          </div>

         
          <div className="links-section">
            <h3 className="section-title">
              <i className="fas fa-external-link-alt"></i>
              Liens du projet
            </h3>
            <div className="project-links">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i>
                  Code source GitHub
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-external-link-alt"></i>
                  Voir la démo
                </a>
              )}
              {project.links.documentation && (
                <a href={project.links.documentation} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-book"></i>
                  Documentation
                </a>
              )}
            </div>
          </div>

          
          <div className="project-info">
            <h3 className="section-title">
              <i className="fas fa-info-circle"></i>
              Informations
            </h3>
            <div className="info-grid">
              <div className="info-item">
                <i className="fas fa-calendar"></i>
                <span>Date: {project.date}</span>
              </div>
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <span>Durée: {project.duration}</span>
              </div>
              <div className="info-item">
                <i className="fas fa-tasks"></i>
                <span>Statut: {project.status}</span>
              </div>
              <div className="info-item">
                <i className="fas fa-tag"></i>
                <span>Catégorie: {project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="project-navigation">
        <Link to="/projects" className="nav-btn back">
          <i className="fas fa-arrow-left"></i>
          Retour aux projets
        </Link>
        
        <div className="nav-buttons">
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="nav-btn">
              <i className="fas fa-external-link-alt"></i>
              Voir la démo
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="nav-btn">
              <i className="fab fa-github"></i>
              Code source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;