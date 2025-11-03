import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
        navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-header">
          <h2>Connexion</h2>
          <p>Accédez à votre espace portfolio</p>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Adresse email</label>
          <div className="input-with-icon">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <div className="input-with-icon">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Votre mot de passe"
              required
            />
          </div>
        </div>
        
        <button type="submit" className="login-btn">
          <i className="fas fa-sign-in-alt"></i> Se connecter
        </button>

        <div className="login-footer">
          <div className="demo-credentials">
            <h4>💡 Identifiants de démonstration :</h4>
            <p><strong>Email :</strong> demo@portfolio.com</p>
            <p><strong>Mot de passe :</strong> anypassword</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;