import React from 'react';

const officers = [
  { name: 'Co-President', person: 'Juan Ventura-Romero', focus: 'Operations & Vision', img: '/JuanV.JPG' },
  { name: 'Co-President', person: 'Angel Flores', focus: 'Leadership & Vision', img: '/AngelFlores.jpeg' },
  { name: 'Vice President', person: 'Steven Diaz', focus: 'Operations & Support', img: '/Stevennew.jpeg' },
  { name: 'Treasurer', person: 'Miguel Gonzalez', focus: 'Funding & Budget', img: '/Miguel.jpeg' },
  { name: 'Secretary', person: 'Destiny Mungia', focus: 'Records, Memberships, & Documentation', img: '/DestinyMunguia_008.jpg' },
  { name: 'ICC & CAUSE Representative', person: 'Carlos Chávez', focus: 'Representation & Campus Connection', img: '/CarlosChavez.jpeg' },
  { name: 'Social Media Representative', person: 'TBD', focus: 'Online Presence & Portfolio', img: '/tbd.jpg' }
];

const Team = () => {
  return (
    <div className="section-block">
      <div className="section-inner">
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2.2rem,5vw,3.2rem)', letterSpacing: '-1px' }}>Our Leadership</h1>
        <p style={{ fontSize: '1.05rem', maxWidth: 820, lineHeight: 1.5 }}>
          Dedicated student leaders coordinating programs, partnerships, mentorship, and member growth. Want to help lead? <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWcXqMnkToFU2sfLIDXCyY3bqRQCHWCcGDYARQZXR4lfALtQ/viewform" target="_blank" rel="noopener noreferrer">Officer applications are now open</a>.
        </p>
        <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', marginTop: '2.5rem' }}>
          {officers.map(o => (
            <div key={o.name + o.person} style={{ background: '#fff', border: '1px solid #dde4ef', borderRadius: 14, padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '.35rem', boxShadow: '0 4px 12px -4px rgba(0,0,0,.06)' }}>
              <img
                src={o.img}
                alt={o.person}
                style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: '50%', marginBottom: '.5rem', background: '#f3f6fa', border: '1px solid #e3e8f0' }}
              />
              <strong style={{ fontSize: '0.95rem', letterSpacing: '.5px', textTransform: 'uppercase', color: 'var(--color-primary)' }}>{o.name}</strong>
              <span style={{ fontSize: '1.15rem', fontWeight: 600 }}>{o.person}</span>
              <span style={{ fontSize: '.85rem', opacity: .75 }}>{o.focus}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;