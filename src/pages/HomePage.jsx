import { Link } from 'react-router';

const HomePage = () => (
  <section className="home-hero" aria-labelledby="home-title">
    <h1 id="home-title" className="home-hero__title">
      Society of Hispanic Professional Engineers
      <span className="home-hero__subtitle">El Camino College Chapter</span>
    </h1>
    <p className="home-hero__lead">
      Building community, advancing leadership, and opening pathways in STEM for Hispanic and underrepresented
      students. Join us for workshops, mentorship, industry connections, and collaborative engineering projects.
    </p>
    <div className="button-row">
      <Link to="/join" className="button button--bright">Become a Member</Link>
      <Link to="/events" className="button button--bright">See Events</Link>
    </div>
  </section>
);

export default HomePage;
