import React from 'react';
import './Footer.css';  // CSS import
import link from "../../assets/link.png"
import facebook from "../../assets/facebook.webp"
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100016135481988" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={link} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
