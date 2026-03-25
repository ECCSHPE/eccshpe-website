import React from 'react';

const webTeamMembers = [
  {
    realName: 'Juan Ventura-Romero',
    githubName: '@jrv-dev',
    role: 'Lead Developer',
    keyContributions: [
      'Built the React + Vite project foundation',
      'Implemented routing and layout structure',
      'Connected SHPE branding across pages'
    ],
    highlights: 'Focuses on architecture, deployment quality, and long-term maintainability.',
    img: '/JuanV.JPG'
  },
  {
    realName: 'Steven Diaz',
    githubName: '@stevendiaz',
    role: 'UI and Content Engineer',
    keyContributions: [
      'Refined visuals and section hierarchy',
      'Improved readability and page flow',
      'Helped align content with chapter goals'
    ],
    highlights: 'Balances clean presentation with practical content updates for members.',
    img: '/Stevennew.jpeg'
  },
  {
    realName: 'Angel Flores',
    githubName: '@angelflores',
    role: 'Community and Feature Contributor',
    keyContributions: [
      'Provided user-facing feature feedback',
      'Helped prioritize pages for members',
      'Supported content accuracy and updates'
    ],
    highlights: 'Bridges chapter needs with site direction and user priorities.',
    img: '/AngelFlores.jpeg'
  },
  {
    realName: 'Open Position',
    githubName: '@tbd',
    role: 'QA and Accessibility Contributor',
    keyContributions: [
      'Cross-device testing and bug reporting',
      'Accessibility and contrast checks',
      'Release verification before deployments'
    ],
    highlights: 'Ensures reliability and polish before updates go live.',
    img: '/tbd.jpg'
  }
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
          {webTeamMembers.map((member) => (
            <article
              key={`${member.realName}-${member.role}`}
              style={{
                border: '1px solid #dae4f1',
                borderRadius: 16,
                background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
                padding: '1.1rem 1.1rem 1.2rem',
                boxShadow: '0 10px 28px -18px rgba(0, 31, 91, 0.7)'
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
                  <p style={{ margin: '.2rem 0 0', fontSize: '.9rem', color: '#36517d', fontWeight: 600 }}>{member.githubName}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteTeam;
