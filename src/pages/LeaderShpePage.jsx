import CardSection from '../components/CardSection';
import PageSection from '../components/PageSection';
import ProfileCard from '../components/ProfileCard';
import { EXECUTIVE_CABINET, LEADERSHPE_AT_LARGE, SUPPORTING_ALUMNI } from '../data/leadership';
import { FORMS } from '../data/site';

// Flip to true to show the LeaderSHPE at Large section again.
const SHOW_AT_LARGE = false;

const MemberSection = ({ title, members }) => (
  <CardSection title={title}>
    {members.map((member) => (
      <ProfileCard key={`${member.title}-${member.name}`} img={member.img} name={member.name}>
        <span className="profile-card__eyebrow">{member.title}</span>
        <h3 className="profile-card__name">{member.name}</h3>
        <p className="profile-card__text">{member.focus}</p>
      </ProfileCard>
    ))}
  </CardSection>
);

const LeaderShpePage = () => (
  <PageSection
    title="LeaderSHPE"
    intro={
      <>
        Our Executive Cabinet and LeaderSHPE members drive chapter operations, events, and member growth. Interested
        in helping lead SHPE at El Camino?{' '}
        <a href={FORMS.officerApplication} target="_blank" rel="noopener noreferrer">
          Officer applications are open.
        </a>
      </>
    }
  >
    <MemberSection title="Executive Cabinet" members={EXECUTIVE_CABINET} />
    {SHOW_AT_LARGE && <MemberSection title="LeaderSHPE at Large" members={LEADERSHPE_AT_LARGE} />}
    <MemberSection title="Supporting LeaderSHPE Alumni" members={SUPPORTING_ALUMNI} />
  </PageSection>
);

export default LeaderShpePage;
