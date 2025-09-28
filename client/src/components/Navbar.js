import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  FiMenu, 
  FiX, 
  FiUser, 
  FiLogOut, 
  FiBookOpen, 
  FiHome,
  FiSettings
} from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <FiBookOpen className="brand-icon" />
          <span>EdHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu desktop">
          <Link to="/" className="navbar-link">
            <FiHome />
            Home
          </Link>
          <Link to="/courses" className="navbar-link">
            <FiBookOpen />
            Courses
          </Link>
          
          {isAuthenticated ? (
            <div className="navbar-user">
              <Link to="/dashboard" className="navbar-link">
                Dashboard
              </Link>
              <div className="profile-dropdown">
                <button 
                  className="profile-button"
                  onClick={toggleProfile}
                >
                  <img 
                    src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=667eea&color=fff`}
                    alt={user?.name}
                    className="profile-avatar"
                  />
                  <span>{user?.name}</span>
                </button>
                
                {isProfileOpen && (
                  <motion.div 
                    className="profile-menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Link 
                      to="/profile" 
                      className="profile-menu-item"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <FiUser />
                      Profile
                    </Link>
                    <Link 
                      to="/dashboard" 
                      className="profile-menu-item"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <FiSettings />
                      Dashboard
                    </Link>
                    <button 
                      className="profile-menu-item logout"
                      onClick={handleLogout}
                    >
                      <FiLogOut />
                      Logout
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          ) : (
            <div className="navbar-auth">
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="mobile-menu-content">
            <Link 
              to="/" 
              className="mobile-menu-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiHome />
              Home
            </Link>
            <Link 
              to="/courses" 
              className="mobile-menu-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiBookOpen />
              Courses
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="mobile-menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile" 
                  className="mobile-menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiUser />
                  Profile
                </Link>
                <button 
                  className="mobile-menu-link logout"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  <FiLogOut />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="mobile-menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="mobile-menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;