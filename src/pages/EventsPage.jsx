import PageSection from '../components/PageSection';
import { CHAPTER_EMAIL } from '../data/site';

const EventsPage = () => (
  <PageSection
    title="Upcoming Events"
    intro="Workshops, networking nights, outreach and more. Meetings are held in the MESA|STEM Center (Nats 4) unless otherwise stated."
  >
    <ul className="plain-list">
      <li>
        <strong>Next General Meeting:</strong> To be announced. Follow us on Instagram or Discord for the latest dates.
      </li>
    </ul>
    <p className="page-note">
      Have an event idea? Want to collab? Reach out via email to <a href={`mailto:${CHAPTER_EMAIL}`}>{CHAPTER_EMAIL}</a>!
    </p>
  </PageSection>
);

export default EventsPage;
