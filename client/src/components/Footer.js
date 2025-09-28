import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiBookOpen, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiYoutube
} from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <FiBookOpen className="footer-logo" />
              <span>EdHub</span>
            </div>
            <p className="footer-description">
              Empowering students to learn coding through interactive courses, 
              hands-on practice, and real-world projects.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <FiYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Learn</h3>
            <ul className="footer-links">
              <li><Link to="/courses">All Courses</Link></li>
              <li><Link to="/courses?category=web-development">Web Development</Link></li>
              <li><Link to="/courses?category=mobile-development">Mobile Development</Link></li>
              <li><Link to="/courses?category=data-science">Data Science</Link></li>
              <li><Link to="/courses?category=machine-learning">Machine Learning</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Community</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/instructors">Instructors</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <span>support@edhub.com</span>
              </div>
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span>123 Learning Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2024 EdHub. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;