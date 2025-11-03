import React, { useState } from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Message envoyé:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Contactez-moi</h1>
        <p className="contact-subtitle">
          Discutons de vos projets data et de comment je peux vous aider à transformer 
          vos données en insights actionnables.
        </p>
      </div>

      <div className="contact-content">
        {/* Informations de contact */}
        <div className="contact-info">
          <div className="info-card">
            <h3><i className="fas fa-info-circle"></i> Informations de contact</h3>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:sarah.dupont@bi-student.com">ayazakia.mahjoub@isgb.ucar.tn</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+33612345678">+216 51 321 792</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Tunisie</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-university"></i>
                <span>Étudiante en Business Intelligence</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3><i className="fas fa-clock"></i> Disponibilité</h3>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-calendar-alt"></i>
                <span>Réponse sous 24h</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-briefcase"></i>
                <span>Ouverte aux stages et alternances</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-video"></i>
                <span>Visio-conférence disponible</span>
              </div>
            </div>
          </div>

          <div className="availability">
            <h3><i className="fas fa-bolt"></i> Disponible immédiatement</h3>
            <p>Pour des projets en Business Intelligence</p>
            <p className="highlight">Réponse garantie sous 24h</p>
            
            <div className="social-contact">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <div className="input-with-icon">
              <i className="fas fa-user"></i>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom complet"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Adresse email</label>
            <div className="input-with-icon">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet du message</label>
            <div className="input-with-icon">
              <i className="fas fa-tag"></i>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Objet de votre message"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <div className="input-with-icon">
              <i className="fas fa-comment"></i>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet ou posez-moi vos questions..."
                rows="6"
                required
              ></textarea>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="form-status success">
              <i className="fas fa-check-circle"></i> Message envoyé avec succès !
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-status error">
              <i className="fas fa-exclamation-circle"></i> Erreur lors de l'envoi. Veuillez réessayer.
            </div>
          )}

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Envoi en cours...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Envoyer le message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;