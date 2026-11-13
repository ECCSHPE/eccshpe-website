// Standard page wrapper: centred content column with a page title and optional intro.
const PageSection = ({ title, intro, children }) => (
  <section className="page-section">
    <div className="page-section__inner">
      <h1 className="page-title">{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
      {children}
    </div>
  </section>
);

export default PageSection;
