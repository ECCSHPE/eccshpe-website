import React, { useState } from 'react';

const exLeadershipAlumni = [
  {
    name: 'Juan Ventura-Romero',
    graduationYear: 2026,
    roleInShpe: 'Co-President',
    currentPosition: 'Mathematics of Computation at UCLA',
    linkedinUrl: 'https://www.linkedin.com/in/juan-ventura-romero/',
    img: '/headshot/Juan.jpg'
  },
  {
    name: 'Angel Flores',
    graduationYear: 2026,
    roleInShpe: 'Co-President',
    currentPosition: 'Structural Engineering at UCSD',
    linkedinUrl: 'https://www.linkedin.com/in/angel-flores-844963216/',
    img: '/headshot/AngelFlores.jpeg'
  },
  {
    name: 'Destiny Mungia',
    graduationYear: 2026,
    roleInShpe: 'Secretary',
    currentPosition: 'Computer Engineering at UCI',
    linkedinUrl: 'https://www.linkedin.com/in/destinymungia/',
    img: '/headshot/DestinyMunguia_008.jpg'
  },
  {
    name: 'Miguel Gonzalez',
    graduationYear: 2026,
    roleInShpe: 'Treasurer',
    currentPosition: 'Structural Engineering at UCSD',
    linkedinUrl: 'https://www.linkedin.com/in/miguel-gonzalez-46b94934a/',
    img: '/headshot/Miguel.jpeg'
  }
];

const exMembersAlumni = [
  {
    name: 'Patrick Alvarez',
    graduationYear: '2026',
    roleInShpe: 'SHPE Member',
    currentPosition: 'Mechanical Engineering at Cal Poly Pomona',
    linkedinUrl: 'https://www.linkedin.com/in/patrick-alvarez-5713b92b0/',
    img: '/public/headshot/Patrick.JPG',
    isTbd: false
  },
  {
    name: 'Nalupono Nagamine',
    graduationYear: '2026',
    roleInShpe: 'SHPE Member',
    currentPosition: 'Eletrical Engineering at UCI',
    linkedinUrl: 'https://www.linkedin.com/in/nalupono-nagamine-8b797a394/',
    img: 'headshot/nalu.jpg',
    isTbd: false
  }
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
  gap: '.45rem',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit'
};

const memberCardHoverStyle = {
  ...memberCardStyle,
  transform: 'translateY(-4px)',
  boxShadow: '0 12px 28px -10px rgba(0,0,0,.35)'
};

const AlumniCard = ({ alumnus }) => {
  const [isHovered, setIsHovered] = useState(false);
  const currentStyle = isHovered ? memberCardHoverStyle : memberCardStyle;

  if (alumnus.linkedinUrl && alumnus.linkedinUrl !== '#' && !alumnus.isTbd) {
    return (
      <a
        href={alumnus.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={currentStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <img
          src={alumnus.img}
          alt={alumnus.name}
          style={{
            width: 96,
            height: 96,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid #e2e8f1',
            background: '#f5f7fb'
          }}
        />
        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{alumnus.name}</h3>
        <span style={{ 
          fontSize: '.75rem', 
          fontWeight: 600, 
          letterSpacing: '.8px', 
          textTransform: 'uppercase', 
          color: '#0070C0',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
          wordWrap: 'break-word'
        }}>
          {alumnus.linkedinUrl}
        </span>
        <span style={{ fontSize: '.82rem', fontWeight: 700, letterSpacing: '.7px', textTransform: 'uppercase', color: '#666' }}>
          Class of {alumnus.graduationYear}
        </span>
        <span style={{ fontSize: '.82rem', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
          {alumnus.roleInShpe}
        </span>
        <p style={{ margin: 0, fontSize: '.93rem', opacity: .82, lineHeight: 1.5 }}>
          <strong>Currently:</strong> {alumnus.currentPosition}
        </p>
      </a>
    );
  }

  return (
    <article key={`${alumnus.name}-${alumnus.graduationYear}`} style={currentStyle}>
      <img
        src={alumnus.img}
        alt={alumnus.name}
        style={{
          width: 96,
          height: 96,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '1px solid #e2e8f1',
          background: '#f5f7fb'
        }}
      />
      <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{alumnus.name}</h3>
      <span style={{ fontSize: '.82rem', fontWeight: 700, letterSpacing: '.7px', textTransform: 'uppercase', color: '#666' }}>
        Class of {alumnus.graduationYear}
      </span>
      <span style={{ fontSize: '.82rem', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
        {alumnus.roleInShpe}
      </span>
      <p style={{ margin: 0, fontSize: '.93rem', opacity: .82, lineHeight: 1.5 }}>
        <strong>Currently:</strong> {alumnus.currentPosition}
      </p>
    </article>
  );
};

const renderAlumniCard = (alumnus) => <AlumniCard key={`${alumnus.name}-${alumnus.graduationYear}`} alumnus={alumnus} />;

const renderAlumniSection = (sectionTitle, alumniList) => (
  <section style={{ marginTop: '2.25rem' }}>
    <h2 style={{ margin: 0, fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', letterSpacing: '-.2px' }}>
      {sectionTitle}
    </h2>
    <div style={sectionGridStyle}>
      {alumniList.map((alumnus) => renderAlumniCard(alumnus))}
    </div>
  </section>
);

const Alumni = () => {
  return (
    <div className="section-block">
      <div className="section-inner">
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', letterSpacing: '-1px' }}>
          Alumni
        </h1>
        <p style={{ fontSize: '1.05rem', maxWidth: 860, lineHeight: 1.6 }}>
          Our alumni continue to make an impact in industry and academia. They led our chapter, built our community,
          and are now paving the way for future SHPE members. Interested in being added to our Alumni page?
          {' '}
          <a
            href="https://docs.google.com/forms/d/e/placeholder-alumni-form-url/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 600 }}
          >
            Click here to submit your information.
          </a>
        </p>

        {renderAlumniSection('Alumni LeaderSHPE', exLeadershipAlumni)}
        {renderAlumniSection('Alumni Members', exMembersAlumni)}
      </div>
    </div>
  );
};

export default Alumni;
