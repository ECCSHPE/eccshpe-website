import React from 'react';

const About = () => {
  return (
    <div className="section-block">
      <div className="section-inner">
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2.2rem,5vw,3.2rem)', letterSpacing: '-1px' }}>About Our Chapter</h1>
        <p style={{ fontSize: '1.1rem', maxWidth: 860, lineHeight: 1.55 }}>
          We are the El Camino College student chapter of the Society of Hispanic Professional Engineers, dedicated to empowering Hispanic and other underrepresented students in STEM. Our community is built on fostering academic success and creating pathways to thriving STEM careers for our members.
        </p>
        <p style={{ fontSize: '1.05rem', maxWidth: 860, lineHeight: 1.5 }}>
          Through national conferences, engineering workshops, local competitions, and volunteer opportunities, we launch our members into becoming the next generation of engineers. With the support of industry partners, campus connections, and our national network, we provide high-quality opportunities for our members to grow academically, professionally, and personally.
        </p>

      </div>
    </div>
  );
};

export default About;