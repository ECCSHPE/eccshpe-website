import React from 'react';

const webTeamMembers = [
  {
    realName: 'Juan Ventura-Romero',
    githubName: '@Juan-V-Tech',
    githubUrl: 'https://github.com/Juan-V-Tech',
    role: 'Lead Developer & Website Founder',
    keyContributions: [
      'Built the React + Vite project foundation',
      'Implemented routing and layout structure',
      'Management of Web Development Team'
    ],
    highlights: 'Focuses on architecture, deployment quality, and long-term maintainability.',
    img: '/headshot/JuanV.JPG'
  },
  {
    realName: 'Steven Diaz',
    githubName: '@Stevenie1230',
    githubUrl: 'https://github.com/Stevenie1230',
    role: 'Content Manager',
    keyContributions: [
      'Updates and ensures accuracy of all text',
      'Uploads and manages images and media from events',
      'Aligns content with chapter goals'
    ],
    highlights: 'Balances clean presentation with practical content updates for members.',
    img: '/headshot/Stevennew.jpeg'
  },
  {
    realName: 'Fernando Miranda',
    githubName: '@Fernandolikespancakes',
    githubUrl: 'mailto:fernando_miranda9308@elcamino.edu',
    role: 'All Roles!',
    keyContributions: [
      'New Learner!',
      'Willing to contribute!',
      'Emotional Support!'
    ],
    highlights: 'Always bringing a smile to everyone on the team!',
    img: '/headshot/Fernando.jpg'
  }, 
  {
    realName: 'Open Position',
    githubName: '@tbd',
    githubUrl: 'mailto:juan_venturaromero@elcamino.edu',
    role: 'All Roles!',
    keyContributions: [
      'Great for Resume!',
      'Real Experience!',
      'Industry Standard Tools'
    ],
    highlights: 'Join a team of student leaders and learn real skills in web development!. Click here to email Juan for more information!',
    img: '/placeholder-assets/tbd.jpg'
  },
];

const WebsiteTeam = () => {
  return (
    <div className="section-block">
      <div className="section-inner">
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2.15rem, 5vw, 3.15rem)', letterSpacing: '-.8px' }}>Website Team</h1>
        <p style={{ marginTop: '.4rem', maxWidth: 900, lineHeight: 1.65, fontSize: '1.02rem' }}>
          Meet the developers and contributors behind the SHPE at El Camino website. This team handles design,
          development, testing, and content delivery so members can find events, opportunities, and resources quickly.
        </p>

        <div
          style={{
            marginTop: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {webTeamMembers.map((member) => {
            const isMailtoLink = member.githubUrl.startsWith('mailto:');
            const cardContent = (
              <article
                className="team-card"
                style={{
                  border: '1px solid #dae4f1',
                  borderRadius: 16,
                  background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
                  padding: '1.1rem 1.1rem 1.2rem',
                  boxShadow: '0 10px 28px -18px rgba(0, 31, 91, 0.7)',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', gap: '.9rem', alignItems: 'center' }}>
                  <img
                    src={member.img}
                    alt={member.realName}
                    style={{ width: 88, height: 88, borderRadius: 14, objectFit: 'cover', border: '1px solid #d6deea', background: '#f4f7fb' }}
                  />
                  <div>
                    <h2 style={{ margin: 0, fontSize: '1.08rem' }}>{member.realName}</h2>
                    <p style={{ margin: '.2rem 0 0', fontSize: '.9rem', color: '#36517d', fontWeight: 600, textDecoration: 'none' }}>
                      {member.githubName}
                    </p>
                    <p style={{ margin: '.3rem 0 0', fontSize: '.9rem', opacity: .8 }}>{member.role}</p>
                  </div>
                </div>

                <div style={{ marginTop: '.95rem' }}>
                  <h3 style={{ margin: 0, fontSize: '.86rem', textTransform: 'uppercase', letterSpacing: '.65px', color: '#0d2a63' }}>
                    Key Contributions
                  </h3>
                  <ul style={{ margin: '.55rem 0 0', paddingLeft: '1.1rem', lineHeight: 1.55, fontSize: '.93rem' }}>
                    {member.keyContributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                </div>

                <p style={{ margin: '.85rem 0 0', fontSize: '.9rem', lineHeight: 1.5, color: '#1f365f' }}>
                  <strong>Additional Impact:</strong> {member.highlights}
                </p>
              </article>
            );

            if (!member.githubUrl) {
              return (
                <div key={`${member.realName}-${member.role}`} style={{ display: 'block', height: '100%' }}>
                  {cardContent}
                </div>
              );
            }

            return (
              <a
                key={`${member.realName}-${member.role}`}
                href={member.githubUrl}
                target={isMailtoLink ? undefined : '_blank'}
                rel={isMailtoLink ? undefined : 'noopener noreferrer'}
                aria-label={isMailtoLink ? `Email ${member.realName}` : `${member.realName} GitHub profile`}
                className="team-card-link"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WebsiteTeam;
