import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // ✅ NavLink au lieu de Link
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
        <NavLink to="/home"> {/* ✅ NavLink pour le logo aussi */}
          <i className="fas fa-code"></i> Mon Portfolio
        </NavLink>
      </div>
      
      {isLoggedIn && (
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/home"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <i className="fas fa-home"></i> Accueil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <i className="fas fa-project-diagram"></i> Projets
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <i className="fas fa-envelope"></i> Contact
            </NavLink>
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