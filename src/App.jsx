import { Route, Routes } from 'react-router';
import OverscrollGuard from './components/OverscrollGuard';
import ScrollToTop from './components/ScrollToTop';
import SiteFooter from './components/SiteFooter';
import StaggeredMenu from './components/StaggeredMenu';
import { BRAND, NAV_ITEMS, SOCIAL_LINKS } from './data/site';
import AboutPage from './pages/AboutPage';
import AlumniPage from './pages/AlumniPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import LeaderShpePage from './pages/LeaderShpePage';
import NotFoundPage from './pages/NotFoundPage';
import WebsiteTeamPage from './pages/WebsiteTeamPage';
import './styles/app.css';

const App = () => (
  <div className="app-shell">
    <OverscrollGuard />
    <ScrollToTop />

    <StaggeredMenu
      position="right"
      items={NAV_ITEMS}
      socialItems={SOCIAL_LINKS}
      displaySocials
      displayItemNumbering
      menuButtonColor="#0a2540"
      openMenuButtonColor="#0a2540"
      changeMenuColorOnOpen={false}
      colors={['#0070C0', '#001F5B', '#72A9BE']}
      logoUrl={BRAND.logo}
      logoAlt="SHPE El Camino College home"
      accentColor="#D33A02"
    />

    <main className="page-main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/leadershpe" element={<LeaderShpePage />} />
        <Route path="/website-team" element={<WebsiteTeamPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>

    <SiteFooter />
  </div>
);

export default App;
