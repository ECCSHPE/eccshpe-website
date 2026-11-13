import PageSection from '../components/PageSection';
import { WEBSITE_TEAM } from '../data/websiteTeam';

const TeamCard = ({ member }) => {
  const isEmail = member.link.startsWith('mailto:');

  return (
    <a
      className="team-card"
      href={member.link}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      aria-label={isEmail ? `Email ${member.name}` : `${member.name} GitHub profile`}
    >
      <div className="team-card__header">
        <img className="team-card__avatar" src={member.img} alt={member.name} loading="lazy" decoding="async" />
        <div className="team-card__info">
          <h2 className="team-card__name">{member.name}</h2>
          <p className="team-card__handle">{member.handle}</p>
          <p className="team-card__role">{member.role}</p>
        </div>
      </div>

      <h3 className="team-card__heading">Key Contributions</h3>
      <ul className="team-card__list">
        {member.contributions.map((contribution) => (
          <li key={contribution}>{contribution}</li>
        ))}
      </ul>

      <p className="team-card__highlights">
        <strong>Additional Impact:</strong> {member.highlights}
      </p>
    </a>
  );
};

const WebsiteTeamPage = () => (
  <PageSection
    title="Website Team"
    intro="Meet the developers and contributors behind the SHPE at El Camino website. This team handles design, development, testing, and content delivery so members can find events, opportunities, and resources quickly."
  >
    <div className="team-grid">
      {WEBSITE_TEAM.map((member) => (
        <TeamCard key={member.name} member={member} />
      ))}
    </div>
  </PageSection>
);

export default WebsiteTeamPage;
