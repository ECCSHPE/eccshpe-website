// A titled subsection with a responsive grid of cards.
const CardSection = ({ title, children }) => (
  <section className="card-section">
    <h2 className="section-title">{title}</h2>
    <div className="card-grid">{children}</div>
  </section>
);

export default CardSection;
