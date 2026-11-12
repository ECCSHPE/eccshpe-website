import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ socials = [] }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer enhanced-footer" aria-labelledby="site-footer-heading">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/shpeasset/ECCSHPEALT.png" alt="SHPE @ ECC logo" className="footer-logo" loading="lazy" />
          <p className="footer-tagline">Empowering Hispanic engineers at El Camino College.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <h3 id="site-footer-heading" className="visually-hidden">Footer</h3>
          <ul className="footer-links" role="list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/leadershpe">LeaderSHPE</Link></li>
            <li><Link to="/website-team">Website Team</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/alumni">Alumni</Link></li>
            <li><Link to="/join">Join</Link></li>
          </ul>
        </nav>
        <div className="footer-socials" aria-label="Social media">
          <ul className="footer-socials-list" role="list">
            {socials.map(s => (
              <li key={s.label}><a href={s.link} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-meta"> 
          <p>© {year} SHPE @ El Camino College</p>
          <p>Made with <span aria-hidden="true">❤</span> by Juan Ventura-Romero '26 </p>
          <p>Maintained with <span aria-hidden="true">❤</span> by El Camino College SHPE Website Team Students</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
