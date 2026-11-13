import { Link } from 'react-router';
import PageSection from '../components/PageSection';

const NotFoundPage = () => (
  <PageSection
    title="Page not found"
    intro="We couldn't find the page you were looking for. It may have moved, or the link may be out of date."
  >
    <Link to="/" className="button">Back to Home</Link>
  </PageSection>
);

export default NotFoundPage;
