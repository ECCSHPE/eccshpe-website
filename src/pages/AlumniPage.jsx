import CardSection from '../components/CardSection';
import PageSection from '../components/PageSection';
import ProfileCard from '../components/ProfileCard';
import { ALUMNI_LEADERSHIP, ALUMNI_MEMBERS } from '../data/alumni';
import { CHAPTER_EMAIL, FORMS } from '../data/site';

const AlumniSection = ({ title, alumni }) => (
  <CardSection title={title}>
    {alumni.map((alumnus) => (
      <ProfileCard
        key={`${alumnus.name}-${alumnus.graduationYear}`}
        img={alumnus.img}
        name={alumnus.name}
        href={alumnus.linkedinUrl}
      >
        <h3 className="profile-card__name">{alumnus.name}</h3>
        {alumnus.linkedinUrl && (
          <span className="profile-card__link-label">
            View LinkedIn <span aria-hidden="true">↗</span>
          </span>
        )}
        <span className="profile-card__meta">Class of {alumnus.graduationYear}</span>
        <span className="profile-card__eyebrow">{alumnus.role}</span>
        <p className="profile-card__text">
          <strong>Currently:</strong> {alumnus.currentPosition}
        </p>
      </ProfileCard>
    ))}
  </CardSection>
);

const AlumniPage = () => (
  <PageSection
    title="Alumni"
    intro={
      <>
        Our alumni continue to make an impact in industry and academia. They led our chapter, built our community, and
        are now paving the way for future SHPE members. Interested in being added to our Alumni page?{' '}
        {FORMS.alumni ? (
          <a href={FORMS.alumni} target="_blank" rel="noopener noreferrer" className="strong-link">
            Submit your information.
          </a>
        ) : (
          <a href={`mailto:${CHAPTER_EMAIL}?subject=Alumni%20page`} className="strong-link">
            Email us your information.
          </a>
        )}
      </>
    }
  >
    <AlumniSection title="Alumni LeaderSHPE" alumni={ALUMNI_LEADERSHIP} />
    <AlumniSection title="Alumni Members" alumni={ALUMNI_MEMBERS} />
  </PageSection>
);

export default AlumniPage;
