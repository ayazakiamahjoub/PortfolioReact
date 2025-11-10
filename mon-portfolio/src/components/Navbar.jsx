import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../Styles/Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/home"> 
          <i className="fas fa-code"></i> Mon Portfolio
        </Link>
      </div>
      
      {isLoggedIn && (
        <ul className="nav-links">
          <li>
            <Link to="/home">
              <i className="fas fa-home"></i> Accueil
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <i className="fas fa-project-diagram"></i> Projets
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fas fa-envelope"></i> Contact
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-btn">
              <i className="fas fa-sign-out-alt"></i> Déconnexion
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;                                                                                                                                            