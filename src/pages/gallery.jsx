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

const shpeClassOf2026 = [
  { alt: 'Juan Ventura-Romero (Co-President)', caption: 'Juan Ventura-Romero | Co-President 2026', img: '/general-meetings/SHPE-class-of-2026/IMG_7272.jpg' },
  { alt: 'Destiny Mungia (Secretary) & Miguel Gonzalez (Treasurer) Class of 2026', caption: 'Destiny Mungia | Secretary 2026 & Miguel Gonzalez | Treasurer 2026', img: '/general-meetings/SHPE-class-of-2026/IMG_4263.jpg' },
  { alt: 'Nalupono Nagamine Class of 2026', caption: 'Nalupono Nagamine | Class of 2026', img: 'general-meetings/SHPE-class-of-2026/IMG_6461.jpg' }
];

const jetEngineDesign = [
  { alt: 'Jet Engine Design Workshop Photo 1', caption: 'Jet Engine Design Workshop', img: '/general-meetings/spring-2026-Jet-Engine-Design/IMG_3698.JPG' },
  { alt: 'Jet Engine Design Workshop Photo 2', caption: 'Jet Engine Design In Action', img: '/general-meetings/spring-2026-Jet-Engine-Design/IMG_3699.jpg' },
  { alt: 'Jet Engine Design Workshop Photo 3', caption: 'Jet Engine Design Community', img: '/general-meetings/spring-2026-Jet-Engine-Design/IMG_3700.jpg' },
  { alt: 'Jet Engine Design Workshop Photo 4', caption: 'Jet Engine Design Guidance', img: '/general-meetings/spring-2026-Jet-Engine-Design/IMG_3701.jpg' },
  { alt: 'Jet Engine Design Workshop Photo 5', caption: 'Jet Engine Design Exploration', img: '/general-meetings/spring-2026-Jet-Engine-Design/IMG_3702.jpg' }
];

const uclasolesMatlab = [
  { alt: 'UCLA SOLES X MATLAB Workshop Photo 1', caption: 'MATLAB Workshop Session 1 Group Photo', img: '/general-meetings/spring-2026-UCLA-SOLES-X-MATLAB-Workshop/IMG_2159.JPEG' },
  { alt: 'UCLA SOLES X MATLAB Workshop Photo 2', caption: 'MATLAB Workshop Session 1 Group Collaboration', img: '/general-meetings/spring-2026-UCLA-SOLES-X-MATLAB-Workshop/IMG_3544.jpg' },
  { alt: 'UCLA SOLES X MATLAB Workshop Photo 2', caption: 'MATLAB Workshop Session 1 UCLA SOLES Guidance', img: '/general-meetings/spring-2026-UCLA-SOLES-X-MATLAB-Workshop/IMG_3548.jpg' }
];
const spring2026Meeting2 = [
  { alt: 'Spring 2026 General Meeting 2 Photo 1', caption: 'Steven Diaz Presents: LinkedIn Workshop', img: '/general-meetings/spring-2026-general-meeting-2-photos/General-Meeting-2-Photo-1.jpg' },
  { alt: 'Spring 2026 General Meeting 2 Photo 2', caption: 'General Meeting 2 Group Photo', img: '/general-meetings/spring-2026-general-meeting-2-photos/General-Meeting-2-Photo-2.JPEG' }
];

const spring2026Meeting1 = [
  { alt: 'Spring 2026 General Meeting 1 Photo 1', caption: 'Paper Tower Building Challenge Photo 1', img: '/general-meetings/spring-2026-general-meeting-1/General-Meeting-1-Photo-1.jpg' },
  { alt: 'Spring 2026 General Meeting 1 Photo 2', caption: 'Paper Tower Building Challenge Photo 2', img: '/general-meetings/spring-2026-general-meeting-1/General-Meeting-1-Photo-2.jpg' },
  { alt: 'Spring 2026 General Meeting 1 Photo 3', caption: 'Paper Tower Building Challenge Photo 3', img: '/general-meetings/spring-2026-general-meeting-1/General-Meeting-1-Photo-3.jpg' }
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
        {renderGallery('SHPE Class of 2026', shpeClassOf2026)}
        {renderGallery('Jet Engine Design', jetEngineDesign)}
        {renderGallery('UCLA SOLES X MATLAB', uclasolesMatlab)}
        {renderGallery('Spring 2026 General Meeting 2', spring2026Meeting2)}
        {renderGallery('Spring 2026 General Meeting 1', spring2026Meeting1)}
      </div>
    </div>
  );
};

export default Gallery;
