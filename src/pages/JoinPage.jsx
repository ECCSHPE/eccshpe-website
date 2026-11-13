import PageSection from '../components/PageSection';
import { FORMS } from '../data/site';

const JoinPage = () => (
  <PageSection
    title="Join SHPE @ El Camino College"
    intro="Empowering Hispanic engineers through community, leadership, and professional growth. Becoming a member connects you to peers, mentors, projects, conferences and national SHPE resources."
  >
    <ol className="plain-list">
      <li>Be an active MESA|ASEM Student at El Camino College</li>
      <li>Fill out the interest form.</li>
      <li>Attend a general meeting or event.</li>
      <li>
        Inquire on how to get a SHPE national membership provided to you, or purchase your own. (Limited Free
        Memberships Available)
      </li>
    </ol>
    <a className="button" href={FORMS.interest} target="_blank" rel="noopener noreferrer">
      Interest Form
    </a>
  </PageSection>
);

export default JoinPage;
