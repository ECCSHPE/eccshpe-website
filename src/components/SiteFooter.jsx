import { Link } from 'react-router';
import { BRAND, NAV_ITEMS, SOCIAL_LINKS } from '../data/site';

const FOOTER_LINKS = NAV_ITEMS.filter((item) => item.to !== '/');

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src={BRAND.logoWhite} alt="SHPE @ ECC logo" className="site-footer__logo" loading="lazy" />
          <p className="site-footer__tagline">Empowering Hispanic engineers at El Camino College.</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="site-footer__list" role="list">
            {FOOTER_LINKS.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Social media">
          <ul className="site-footer__list site-footer__list--social" role="list">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">{social.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__meta">
          <p>© {year} SHPE @ El Camino College</p>
          <p>Made with <span aria-hidden="true">❤</span> by Juan Ventura-Romero &apos;26</p>
          <p>Maintained with <span aria-hidden="true">❤</span> by El Camino College SHPE Website Team Students</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
