import React from 'react';

const Footer = ({ socials = [] }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer enhanced-footer" aria-labelledby="site-footer-heading">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/ECCSHPEALT.png" alt="SHPE @ ECC logo" className="footer-logo" loading="lazy" />
          <p className="footer-tagline">Empowering Hispanic engineers at El Camino College.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <h3 id="site-footer-heading" className="visually-hidden">Footer</h3>
          <ul className="footer-links" role="list">
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/join">Join</a></li>
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
          <p>Made with <span aria-hidden="true">❤</span> by Juan Ventura-Romero</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
