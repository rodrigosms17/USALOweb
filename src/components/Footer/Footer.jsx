import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} USALO.  
          <Link to="/login" className="footer-link"> Todos los derechos reservados.</Link>
        </p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/usaloperu_/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
