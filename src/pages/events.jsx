import React from 'react';

const Events = () => {
  return (
    <div className="section-block alt">
      <div className="section-inner">
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2.2rem,5vw,3.2rem)', letterSpacing: '-1px' }}>Upcoming Events</h1>
        <p style={{ fontSize: '1.05rem', maxWidth: 860, lineHeight: 1.55 }}>
          Workshops, networking nights, outreach and more. All General Meetings 3:45 pm PT in MESA|STEM Center Nats 4 unless otherwise stated.  For workshop times please see the RSVP form.
        </p>
        <ul className="events-list">
          <li><strong>9/17 Week 4 General Meeting 1:</strong> Blast Off! Intro to SHPE @ El Camino College </li>
          <li><strong>10/1 Week 6 General Meeting 2:</strong> 3D Printing/CAD Workshop</li>
          <li><strong>10/15 Week 8 General Meeting 3:</strong> Bridge Building Competition Workshop</li>
          <li>
            <strong>10/24 Week 9 Skills Lab:</strong> SHPE @ El Camino College X MathWorks X MESA X UCLA SOLES|SHPE Present: MatLab Onramp Workshop
            <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBORxASWuhpRCjvML-jxo0QZnwhfC7gW8ILbrL39sqMiomxg/viewform" target="_blank" rel="noopener noreferrer">RSVP Form</a>
          </li>
          <li><strong>10/29 Week 10 General Meeting 4:</strong> SHPE @ El Camino College X ECC3D Present: 3D-Print Workshop</li>
          <li><strong>10/31 Week 10 Skills Lab:</strong> Jet Lab Workshop</li>
          <li><strong>11/7 Week 11 Skills Lab:</strong> Electric Workshop</li>
          <li><strong>11/12 Week 12 General Meeting 5:</strong> Industry Panel (STEM Professionals)</li>
          <li><strong>11/14 Week 12 Skills Lab:</strong> Seismic Workshop</li>
          <li><strong>11/21 Week 13 Skills Lab:</strong> Website Workshop</li>
          <li><strong>11/26 Week 14 General Meeting 6:</strong> Recap/Partnerships</li>
        </ul>
        <p style={{ fontSize: '.95rem' }}>Have an event idea? Want to collab? Reach out via Email to shpe@elcamino.edu!.</p>
      </div>
    </div>
  );
};

export default Events;
