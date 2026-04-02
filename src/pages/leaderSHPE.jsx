import React from 'react';

const executiveCabinetMembers = [
  { title: 'Co-President', person: 'Juan Ventura-Romero', focus: 'Operations, planning, and chapter vision', img: '/headshot/JuanV.JPG' },
  { title: 'Co-President', person: 'Angel Flores', focus: 'Member development and strategic leadership', img: '/headshot/AngelFlores.jpeg' },
  { title: 'Vice President', person: 'Steven Diaz', focus: 'Logistics, support systems, and execution', img: '/headshot/Stevennew.jpeg' },
  { title: 'Treasurer', person: 'Miguel Gonzalez', focus: 'Budget stewardship and funding strategy', img: '/headshot/Miguel.jpeg' },
  { title: 'Secretary', person: 'Destiny Mungia', focus: 'Documentation, records, and coordination', img: '/headshot/DestinyMunguia_008.jpg' },
  { title: 'ICC and CAUSE Representative', person: 'Carlos Chavez', focus: 'Campus representation and partnerships', img: '/headshot/CarlosChavez.jpeg' }
];

const leaderShpeMembers = [
  { title: 'LEADERSHPE at Large', person: 'Alejandro Villalta', focus: 'Chapter support and cross-team collaboration', img: '/headshot/AlejandroV.jpg' },
  { title: 'LEADERSHPE at Large', person: 'Isaac Bhoorquez', focus: 'Member engagement and program support', img: '/headshot/IsaacB.jpg' },
  { title: 'LEADERSHPE at Large', person: 'Roberto Gomez', focus: 'Operations support and event execution', img: '/headshot/RobertoGomez.jpg' },
  { title: 'LEADERSHPE at Large', person: 'Sebastian Artega', focus: 'Community outreach and member experience', img: '/headshot/SebastianA.jpg' },
  { title: 'LEADERSHPE at Large', person: 'Viel Olaguera', focus: 'General chapter initiatives and support', img: '/headshot/VielO.jpg' }
];

const sectionGridStyle = {
  display: 'grid',
  gap: '1.25rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  marginTop: '1.15rem'
};

const memberCardStyle = {
  background: '#ffffff',
  border: '1px solid #d9e2ef',
  borderRadius: 14,
  padding: '1rem 1.1rem',
  boxShadow: '0 6px 18px -10px rgba(0,0,0,.22)',
  display: 'flex',
  flexDirection: 'column',
  gap: '.45rem'
};

const renderMemberSection = (sectionTitle, members) => (
  <section style={{ marginTop: '2.25rem' }}>
    <h2 style={{ margin: 0, fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', letterSpacing: '-.2px' }}>{sectionTitle}</h2>
    <div style={sectionGridStyle}>
      {members.map((member) => (
        <article key={`${sectionTitle}-${member.title}-${member.person}`} style={memberCardStyle}>
          <img
            src={member.img}
            alt={member.person}
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid #e2e8f1',
              background: '#f5f7fb'
            }}
          />
          <span style={{ fontSize: '.82rem', fontWeight: 700, letterSpacing: '.7px', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
            {member.title}
          </span>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{member.person}</h3>
          <p style={{ margin: 0, fontSize: '.93rem', opacity: .82, lineHeight: 1.5 }}>{member.focus}</p>
        </article>
      ))}
    </div>
  </section>
);

const LeaderSHPE = () => {
  return (
    <div className="section-block">
      <div className="section-inner">
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', letterSpacing: '-1px' }}>LeaderSHPE</h1>
        <p style={{ fontSize: '1.05rem', maxWidth: 860, lineHeight: 1.6 }}>
          Our Executive Cabinet and LeaderSHPE members drive chapter operations, events, and member growth.
          Interested in helping lead SHPE at El Camino?
          {' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeWcXqMnkToFU2sfLIDXCyY3bqRQCHWCcGDYARQZXR4lfALtQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Officer applications are open.
          </a>
        </p>

        {renderMemberSection('Executive Cabinet', executiveCabinetMembers)}
        {renderMemberSection('LeaderSHPE at Large', leaderShpeMembers)}
      </div>
    </div>
  );
};

export default LeaderSHPE;
