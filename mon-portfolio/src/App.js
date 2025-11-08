import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route 
            path="/login" 
            element={
              !isLoggedIn ? 
                <Login setIsLoggedIn={setIsLoggedIn} /> : 
                <Navigate to="/home" />
            } 
          />
          <Route 
            path="/home" 
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />} 
          />
           <Route 
            path="/projects" 
            element={isLoggedIn ? <Projects /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/project/:id" 
            element={isLoggedIn ? <ProjectDetail /> : <Navigate to="/login" />} 
          />

          <Route 
            path="/contact" 
            element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} 
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;