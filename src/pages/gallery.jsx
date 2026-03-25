import React from 'react';

const gallerySectionStyle = {
  marginTop: '2rem'
};

const imageGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '1rem',
  marginTop: '1rem'
};

const imageCardStyle = {
  margin: 0,
  background: '#ffffff',
  border: '1px solid #d9e2ef',
  borderRadius: 12,
  overflow: 'hidden',
  boxShadow: '0 6px 18px -10px rgba(0,0,0,.22)'
};

const imageStyle = {
  display: 'block',
  width: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  background: '#f5f7fb'
};

const captionStyle = {
  margin: 0,
  padding: '.75rem .85rem',
  fontSize: '.92rem',
  fontWeight: 600,
  color: '#0c2340'
};

const spring2026Meeting1 = [
  { alt: 'Spring 2026 General Meeting 1 placeholder 1', caption: 'GM1 Photo Slot 1', img: '/tbd.jpg' },
  { alt: 'Spring 2026 General Meeting 1 placeholder 2', caption: 'GM1 Photo Slot 2', img: '/tbd.jpg' },
  { alt: 'Spring 2026 General Meeting 1 placeholder 3', caption: 'GM1 Photo Slot 3', img: '/tbd.jpg' }
];

const spring2026Meeting2 = [
  { alt: 'Spring 2026 General Meeting 2 placeholder 1', caption: 'GM2 Photo Slot 1', img: '/tbd.jpg' },
  { alt: 'Spring 2026 General Meeting 2 placeholder 2', caption: 'GM2 Photo Slot 2', img: '/tbd.jpg' },
  { alt: 'Spring 2026 General Meeting 2 placeholder 3', caption: 'GM2 Photo Slot 3', img: '/tbd.jpg' }
];

const renderGallery = (title, images) => (
  <section style={gallerySectionStyle}>
    <h2 style={{ margin: 0, fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)', letterSpacing: '-.2px' }}>{title}</h2>
    <div style={imageGridStyle}>
      {images.map((item) => (
        <figure key={`${title}-${item.caption}`} style={imageCardStyle}>
          <img src={item.img} alt={item.alt} style={imageStyle} />
          <figcaption style={captionStyle}>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

const Gallery = () => {
  return (
    <div className="section-block alt">
      <div className="section-inner">
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2.2rem,5vw,3.2rem)', letterSpacing: '-1px' }}>Gallery</h1>
        <p style={{ fontSize: '1.05rem', maxWidth: 860, lineHeight: 1.55 }}>
          Club General Meetings and projects gallery. Add event photos as the semester progresses.
        </p>

        {renderGallery('Spring 2026 General Meeting 1', spring2026Meeting1)}
        {renderGallery('Spring 2026 General Meeting 2', spring2026Meeting2)}
      </div>
    </div>
  );
};

export default Gallery;
