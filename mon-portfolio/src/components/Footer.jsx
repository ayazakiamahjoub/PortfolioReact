import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>© {currentYear} Mon Portfolio. Tous droits réservés.</p>
        </div>
        
        <div className="social-links">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visiter mon GitHub"
          >
            <i className="fab fa-github social-icon"></i>
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visiter mon LinkedIn"
          >
            <i className="fab fa-linkedin social-icon"></i>
            LinkedIn
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Me suivre sur Twitter"
          >
            <i className="fab fa-twitter social-icon"></i>
            Twitter
          </a>
          <a 
            href="mailto:contact@portfolio.com"
            aria-label="M'envoyer un email"
          >
            <i className="fas fa-envelope social-icon"></i>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;