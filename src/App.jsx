import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import LeaderSHPE from './pages/leaderSHPE';
import WebsiteTeam from './pages/websiteTeam';
import Events from './pages/events';
import Join from './pages/join';
import Gallery from './pages/gallery';
import StaggeredMenu from './components/StaggeredMenu';
import ScrollControl from './components/ScrollControl';
import Footer from './components/Footer';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'LeaderSHPE', ariaLabel: 'View our LeaderSHPE page', link: '/leadershpe' },
    { label: 'Website Team', ariaLabel: 'Meet our website team', link: '/website-team' },
    { label: 'Events', ariaLabel: 'See our upcoming events', link: '/events' },
    { label: 'Gallery', ariaLabel: 'View our gallery page', link: '/gallery' },
    { label: 'Join', ariaLabel: 'Join the chapter', link: '/join' },
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/shpe_elco/' },
    { label: 'GitHub', link: 'https://github.com/ECCSHPE' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/society-of-hispanic-professional-engineers-el-camino-college/' },
    { label: 'Discord', link: 'https://discord.gg/QKNKxCbgX6' }
  ];

  const handleNavigate = (href) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <div className="app-shell">
      <ScrollControl />
      {/* Overlay menu */}
      <StaggeredMenu
        position="right"
        items={menuItems.map(i => ({ ...i, onClick: () => handleNavigate(i.link) }))}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#0a2540"
        openMenuButtonColor="#0a2540"
        changeMenuColorOnOpen={false}
        colors={["#0070C0", "#001F5B", "#72A9BE"]}
        logoUrl="/ECCSHPE.png"
        accentColor="#D33A02"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      {/* Page content area */}
      <main className="page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadershpe" element={<LeaderSHPE />} />
          <Route path="/website-team" element={<WebsiteTeam />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </main>
      <Footer socials={socialItems} />
    </div>
  );
}

export default App;
