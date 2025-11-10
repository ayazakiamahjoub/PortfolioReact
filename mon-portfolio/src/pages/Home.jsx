import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="profile-image">
          <img 
            src="./assets/photoDeProfil.jpeg"
            alt="Mahjoub Ayakia - Étudiante en Business Intelligence" 
            className="profile-photo"
          />
        </div>
        
        <div className="hero-content">
          <h1>Eya Zakia Mahjoub</h1>
          <div className="hero-subtitle">
            Étudiante de l' ISG Bizerte en Business Intelligence
          </div>
          <p className="hero-description">
            Passionnée par la transformation des données en insights stratégiques. 
            Je me spécialise dans l'analyse de données, la visualisation et l'aide 
            à la décision business. Mon objectif est de créer des tableaux de bord 
            intuitifs qui permettent aux entreprises de prendre des décisions 
            éclairées basées sur des données concrètes.
          </p>
          
          <div className="cta-buttons">
            <Link to="/projects" className="cta-btn primary">
              <i className="fas fa-project-diagram"></i> Voir mes projets
            </Link>
            <Link to="/contact" className="cta-btn secondary">
              <i className="fas fa-envelope"></i> Me contacter
            </Link>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Mes Compétences</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3><i className="fas fa-database"></i> Data Analysis</h3>
            <div className="skills-list">
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Power BI</span>
              <span className="skill-tag">Tableau</span>
              <span className="skill-tag">Excel Avancé</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">R</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3><i className="fas fa-chart-line"></i> Business Intelligence</h3>
            <div className="skills-list">
              <span className="skill-tag">ETL</span>
              <span className="skill-tag">Data Warehouse</span>
              <span className="skill-tag">KPI Dashboard</span>
              <span className="skill-tag">Reporting</span>
              <span className="skill-tag">Data Modeling</span>
              <span className="skill-tag">Data Visualization</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3><i className="fas fa-cogs"></i> Outils & Technologies</h3>
            <div className="skills-list">
              <span className="skill-tag">Microsoft Power Platform</span>
              <span className="skill-tag">SQL Server</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Google Analytics</span>
              <span className="skill-tag">JIRA</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
        </div>
      </section>

      <section className="objectives-section">
        <h2 className="section-title">Mes Objectifs</h2>
        
        <div className="objectives-grid">
          <div className="objective-card">
            <i className="fas fa-rocket"></i>
            <h4>Innovation Data</h4>
            <p>Développer des solutions BI innovantes qui transforment la façon dont les entreprises utilisent leurs données.</p>
          </div>
          
          <div className="objective-card">
            <i className="fas fa-graduation-cap"></i>
            <h4>Formation Continue</h4>
            <p>Me spécialiser en Machine Learning et Intelligence Artificielle appliqués au business.</p>
          </div>
          
          <div className="objective-card">
            <i className="fas fa-handshake"></i>
            <h4>Collaboration</h4>
            <p>Travailler avec des équipes pluridisciplinaires pour créer des solutions data-driven impactantes.</p>
          </div>
          
          <div className="objective-card">
            <i className="fas fa-chart-bar"></i>
            <h4>Impact Business</h4>
            <p>Aider les entreprises à maximiser leur ROI grâce à des analyses données pertinentes et actionnables.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;